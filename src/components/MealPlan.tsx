import React from 'react';
import { Clock, Utensils, Flame, Heart, Calendar } from 'lucide-react';

const MealPlan = ({ plan }: { plan: string }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Utensils className="mr-2" /> Your Personalized Meal Plan
          </h2>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-1" />
              <span>Custom Duration</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-1" />
              <span>Detailed Timings</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Flame className="h-5 w-5 mr-1" />
              <span>Customized Recipes</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Heart className="h-5 w-5 mr-1" />
              <span>Nutritionally Balanced</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-medium">
              {plan}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Diet Planner by Aryan Acharya. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;