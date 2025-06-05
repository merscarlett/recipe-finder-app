'use client';

interface Ingredient {
  id: number;
  original: string;
}

interface RecipeDetailsProps {
  title: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  summary: string;
  error?: boolean;
}

export default function RecipeDetailsClient({
  title,
  extendedIngredients,
  readyInMinutes,
  servings,
  summary,
  error,
}: RecipeDetailsProps) {
  if (error) {
    return (
      <p className="text-center text-red-400 mb-4">
        Failed to fetch recipe details
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white py-10 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-300 mb-4 text-center">
        {title}
      </h1>

      <p className="text-sm text-gray-300 mb-4 text-center">
        Ready in: {readyInMinutes} minutes | Servings: {servings}
      </p>

      {summary && (
        <div
          className="text-gray-200 mb-6 leading-relaxed [&>strong]:text-blue-300 [&>b]:text-blue-300 [&>a]:underline"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      )}

      <h2 className="text-xl font-semibold text-blue-300 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-100">
        {extendedIngredients.map((ingredient, index) => (
          <li key={`${ingredient.id}-${index}`}>{ingredient.original}</li>
        ))}
      </ul>
    </main>
  );
}
