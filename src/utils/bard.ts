import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAwgJhpeQ5VwFTJmx_wqGS6JwEprGf36uE');

export async function generateMealPlan(preferences: any) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const days = parseInt(preferences.duration);

  const prompt = `Generate a creative and detailed ${days}-day meal plan with recipes based on these preferences:
    - Number of days: ${days}
    - Diet type: ${preferences.dietType}
    - Cuisine preference: ${preferences.cuisineType}
    - Calories per day: ${preferences.calories}
    - Allergies: ${preferences.allergies}
    - Activity level: ${preferences.activityLevel}
    - Weight goal: ${preferences.weightGoal}
    - Cooking time preference: ${preferences.cookingTime}
    - Spice level: ${preferences.spiceLevel}
    - Health conditions: ${preferences.healthConditions}
    - Supplements: ${preferences.supplements}
    - Excluded ingredients: ${preferences.excludedIngredients}
    - Meal prep preference: ${preferences.mealPrepPreference}

    Important: Generate exactly ${days} days of meals, no more and no less.

    For each day, provide:
    1. Breakfast (with recipe)
    2. Morning Snack
    3. Lunch (with recipe)
    4. Afternoon Snack
    5. Dinner (with recipe)

    For each recipe include:
    - 👨‍🍳 Preparation time
    - ⏲️ Cooking time
    - 🥗 Ingredients with measurements
    - 📝 Step-by-step instructions
    - 📊 Nutritional information
    - 💡 Tips for meal prep
    - 🔄 Storage instructions

    Format the output in a creative way with emojis and clear sections for each day. Make it visually appealing with proper spacing and organization.
    Add a fun fact or tip about the cuisine type selected.
    
    Start each day with "🌟 Day ${days <= 1 ? '' : '[1-' + days + ']'}: [Theme based on the meals]"
    End each day with a motivational quote related to healthy eating.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating meal plan:', error);
    throw error;
  }
}