import { Suspense } from 'react';
import RecipeDetailsClient from './RecipeDetails';

const API_KEY = process.env.SPOONACULAR_API_KEY;

async function fetchRecipeDetails(id: string) {
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
  const res = await fetch(apiUrl, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch details');
  return res.json();
}

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const recipeDetails = await fetchRecipeDetails(awaitedParams.id);

  return (
    <Suspense
      fallback={
        <p className="text-center text-blue-300 mt-10">Loading details...</p>
      }
    >
      <RecipeDetailsClient
        title={recipeDetails?.title || ''}
        extendedIngredients={recipeDetails?.extendedIngredients || []}
        readyInMinutes={recipeDetails?.readyInMinutes || 0}
        servings={recipeDetails?.servings || 0}
        summary={recipeDetails?.summary || ''}
        error={!recipeDetails}
      />
    </Suspense>
  );
}
