import React from 'react';
import { Activity, Scale, Heart } from 'lucide-react';
import { FormField } from './FormField';

interface HealthSectionProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
}

export const HealthSection = ({ formData, updateFormData }: HealthSectionProps) => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-medium text-gray-900 border-b pb-2">Health & Fitness</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Activity Level"
          type="select"
          value={formData.activityLevel}
          onChange={(value) => updateFormData('activityLevel', value)}
          options={[
            { value: 'sedentary', label: 'Sedentary (Office Job)' },
            { value: 'light', label: 'Light Exercise (1-2 days/week)' },
            { value: 'moderate', label: 'Moderate Exercise (3-5 days/week)' },
            { value: 'very', label: 'Very Active (6-7 days/week)' },
            { value: 'extra', label: 'Extra Active (Athletes)' }
          ]}
          icon={<Activity className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Weight Goal"
          type="select"
          value={formData.weightGoal}
          onChange={(value) => updateFormData('weightGoal', value)}
          options={[
            { value: 'lose', label: 'Weight Loss' },
            { value: 'maintain', label: 'Maintain Weight' },
            { value: 'gain', label: 'Gain Weight' },
            { value: 'muscle', label: 'Build Muscle' }
          ]}
          icon={<Scale className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Health Conditions"
          type="text"
          value={formData.healthConditions}
          onChange={(value) => updateFormData('healthConditions', value)}
          placeholder="e.g., diabetes, hypertension"
          icon={<Heart className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Daily Calorie Target"
          type="number"
          value={formData.calories}
          onChange={(value) => updateFormData('calories', value)}
          placeholder="e.g., 2000"
        />
      </div>
    </div>
  );
};