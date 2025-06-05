import { Metadata } from 'next';
import { Suspense } from 'react';
import RecipesList from './RecipesList';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

type ApiResponse = {
  results: Recipe[];
};

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'List of recipes based on your filters',
};

const API_KEY = process.env.SPOONACULAR_API_KEY;

export default async function RecipePage({
  searchParams,
}: {
  searchParams: Promise<{
    recipe?: string;
    cuisine?: string;
    maxTime?: string;
  }>;
}) {
  const awaitedSearchParams = await searchParams;

  const recipe = awaitedSearchParams?.recipe || '';
  const cuisine = awaitedSearchParams?.cuisine || '';
  const maxTime = awaitedSearchParams?.maxTime || '';

  const params = new URLSearchParams();
  if (recipe) params.append('query', recipe);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxTime) params.append('maxReadyTime', maxTime);
  params.append('apiKey', API_KEY || '');

  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

  let recipes: Recipe[] = [];
  let error = false;

  try {
    const result = await fetch(apiUrl, {
      next: { revalidate: 60 },
    });
    if (!result.ok) throw new Error('API error');
    const data: ApiResponse = await result.json();
    recipes = data.results;
  } catch (err) {
    error = true;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-300 text-center m-8">
          Recipes
        </h1>

        {error && (
          <p className="text-center text-red-400 mb-4">
            Failed to fetch recipes
          </p>
        )}

        {!error && recipes.length === 0 && (
          <p className="text-center text-gray-400 mb-4">
            No recipes found for your filters
          </p>
        )}

        {!error && recipes.length > 0 && (
          <Suspense
            fallback={
              <p className="text-center text-blue-300">Loading recipes...</p>
            }
          >
            <RecipesList recipes={recipes} />
          </Suspense>
        )}
      </div>
    </main>
  );
}
