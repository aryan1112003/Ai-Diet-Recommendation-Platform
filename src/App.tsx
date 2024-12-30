import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ChefHat, Github } from 'lucide-react';
import { DietForm } from './components/DietForm';
import MealPlan from './components/MealPlan';

function App() {
  const [mealPlan, setMealPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Diet Planner</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/aryan1112003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
              >
                <Github className="h-5 w-5 mr-1" />
                <span>@aryan1112003</span>
              </a>
              <p className="text-sm text-gray-500">by Aryan Acharya</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Get Your Personalized Meal Plan
            </h2>
            <p className="mt-2 text-center text-lg text-gray-600">
              Fill out the form below to receive a customized diet plan with recipes
            </p>
          </div>

          <DietForm onSubmit={setMealPlan} />
          
          {mealPlan && <MealPlan plan={mealPlan} />}
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Diet Planner by Aryan Acharya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;