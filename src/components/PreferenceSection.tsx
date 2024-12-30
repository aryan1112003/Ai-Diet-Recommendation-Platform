import React from 'react';
import { Clock, Flame, Calendar } from 'lucide-react';
import { FormField } from './FormField';

interface PreferenceSectionProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
}

export const PreferenceSection = ({ formData, updateFormData }: PreferenceSectionProps) => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-medium text-gray-900 border-b pb-2">Meal Preferences</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Plan Duration (Days)"
          type="select"
          value={formData.duration}
          onChange={(value) => updateFormData('duration', value)}
          options={[
            { value: '1', label: '1 Day' },
            { value: '2', label: '2 Days' },
            { value: '3', label: '3 Days' }
          ]}
          icon={<Calendar className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Cuisine Type"
          type="select"
          value={formData.cuisineType}
          onChange={(value) => updateFormData('cuisineType', value)}
          options={[
            { value: 'indian', label: 'Indian' },
            { value: 'italian', label: 'Italian' },
            { value: 'mexican', label: 'Mexican' },
            { value: 'chinese', label: 'Chinese' },
            { value: 'japanese', label: 'Japanese' },
            { value: 'mediterranean', label: 'Mediterranean' },
            { value: 'thai', label: 'Thai' },
            { value: 'french', label: 'French' },
            { value: 'korean', label: 'Korean' }
          ]}
        />

        <FormField
          label="Cooking Time Preference"
          type="select"
          value={formData.cookingTime}
          onChange={(value) => updateFormData('cookingTime', value)}
          options={[
            { value: 'quick', label: 'Quick (15-30 mins)' },
            { value: 'medium', label: 'Medium (30-60 mins)' },
            { value: 'elaborate', label: 'Elaborate (60+ mins)' }
          ]}
          icon={<Clock className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Spice Level"
          type="select"
          value={formData.spiceLevel}
          onChange={(value) => updateFormData('spiceLevel', value)}
          options={[
            { value: 'mild', label: 'Mild' },
            { value: 'medium', label: 'Medium' },
            { value: 'spicy', label: 'Spicy' },
            { value: 'extra-spicy', label: 'Extra Spicy' }
          ]}
          icon={<Flame className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Meal Prep Preference"
          type="select"
          value={formData.mealPrepPreference}
          onChange={(value) => updateFormData('mealPrepPreference', value)}
          options={[
            { value: 'daily', label: 'Cook Daily' },
            { value: 'batch', label: 'Batch Cooking' },
            { value: 'mix', label: 'Mix of Both' }
          ]}
        />
      </div>
    </div>
  );
};