'use client';

import Link from 'next/link';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

export default function RecipesList({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg hover:bg-gray-700 transition"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">{recipe.title}</div>
        </Link>
      ))}
    </div>
  );
}
