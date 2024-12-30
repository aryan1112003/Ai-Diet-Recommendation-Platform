import React, { useState } from 'react';
import { Utensils, Activity, Scale, Heart, Clock, Flame } from 'lucide-react';
import toast from 'react-hot-toast';
import { generateMealPlan } from '../utils/bard';
import { PreferenceSection } from './PreferenceSection';
import { HealthSection } from './HealthSection';
import { DietarySection } from './DietarySection';

interface DietFormProps {
  onSubmit: (plan: string) => void;
}

export const DietForm: React.FC<DietFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    duration: '7',
    dietType: '',
    cuisineType: '',
    calories: '',
    allergies: '',
    activityLevel: '',
    weightGoal: '',
    mealPreference: '',
    cookingTime: '',
    spiceLevel: '',
    healthConditions: '',
    supplements: '',
    excludedIngredients: '',
    budget: 'medium',
    mealPrepPreference: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.duration) {
      toast.error('Please select a meal plan duration');
      return;
    }

    setLoading(true);
    
    try {
      const mealPlan = await generateMealPlan({
        ...formData,
        duration: parseInt(formData.duration)
      });
      onSubmit(mealPlan);
      toast.success('Your personalized meal plan is ready!');
    } catch (error) {
      toast.error('Failed to generate meal plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Utensils className="mr-2" /> Personalize Your Meal Plan
          </h3>
        </div>
        
        <div className="p-6 space-y-8">
          <PreferenceSection formData={formData} updateFormData={updateFormData} />
          <HealthSection formData={formData} updateFormData={updateFormData} />
          <DietarySection formData={formData} updateFormData={updateFormData} />
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200 ease-in-out"
          >
            {loading ? (
              <>
                <Flame className="animate-spin mr-2" />
                Creating Your Perfect Meal Plan...
              </>
            ) : (
              <>
                <Heart className="mr-2" />
                Generate Personalized Meal Plan
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};