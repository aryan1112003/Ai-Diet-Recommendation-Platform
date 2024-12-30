import React from 'react';
import { Utensils, AlertCircle } from 'lucide-react';
import { FormField } from './FormField';

interface DietarySectionProps {
  formData: any;
  updateFormData: (field: string, value: string) => void;
}

export const DietarySection = ({ formData, updateFormData }: DietarySectionProps) => {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-medium text-gray-900 border-b pb-2">Dietary Requirements</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Diet Type"
          type="select"
          value={formData.dietType}
          onChange={(value) => updateFormData('dietType', value)}
          options={[
            { value: 'omnivore', label: 'Omnivore' },
            { value: 'vegetarian', label: 'Vegetarian' },
            { value: 'vegan', label: 'Vegan' },
            { value: 'pescatarian', label: 'Pescatarian' },
            { value: 'keto', label: 'Ketogenic' },
            { value: 'paleo', label: 'Paleo' },
            { value: 'mediterranean', label: 'Mediterranean' },
            { value: 'gluten-free', label: 'Gluten-Free' }
          ]}
          icon={<Utensils className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Allergies & Intolerances"
          type="text"
          value={formData.allergies}
          onChange={(value) => updateFormData('allergies', value)}
          placeholder="e.g., nuts, dairy, gluten"
          icon={<AlertCircle className="h-5 w-5 text-gray-400" />}
        />

        <FormField
          label="Excluded Ingredients"
          type="text"
          value={formData.excludedIngredients}
          onChange={(value) => updateFormData('excludedIngredients', value)}
          placeholder="e.g., mushrooms, olives"
        />

        <FormField
          label="Supplements"
          type="text"
          value={formData.supplements}
          onChange={(value) => updateFormData('supplements', value)}
          placeholder="e.g., protein powder, vitamins"
        />
      </div>
    </div>
  );
};