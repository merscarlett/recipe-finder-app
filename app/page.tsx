'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();

  const [recipe, setRecipe] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [maxTime, setMaxTime] = useState<string>('');

  const isNextButtonEnable = recipe || cuisine || maxTime;

  const handleNext = () => {
    const params = new URLSearchParams();

    if (recipe) params.append('recipe', recipe);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxTime) params.append('maxTime', maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-300">
          Search Recipes
        </h1>

        <div>
          <label className="block text-medium font-bold text-blue-300">
            Recipe Name
          </label>
          <input
            type="text"
            placeholder="e.g. pasta"
            value={recipe}
            onChange={e => setRecipe(e.target.value)}
            className="h-10 w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-medium font-bold text-blue-300">
            Cuisine
          </label>
          <select
            value={cuisine}
            onChange={e => setCuisine(e.target.value)}
            className="h-10 w-full px-2 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
            <option value="American">American</option>
            <option value="British">British</option>
          </select>
        </div>

        <div>
          <label className="block text-medium font-bold text-blue-300">
            Max preparation time
          </label>
          <input
            type="number"
            min={1}
            value={maxTime}
            onChange={e => setMaxTime(e.target.value)}
            className="h-10 w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleNext}
          disabled={!isNextButtonEnable}
          className={`w-full py-2 my-4 rounded-md text-white font-semibold transition 
            ${
              isNextButtonEnable
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          Next
        </button>
      </div>
    </main>
  );
}
