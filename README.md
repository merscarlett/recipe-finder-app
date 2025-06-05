# recipe-finder-app# 
🍽️ Recipe Explorer – Next.js App

A simple recipe search application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
It fetches data from the Spoonacular API and allows filtering by recipe name, cuisine type, and maximum cooking time.

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/merscarlett/recipe-finder-app.git
cd recipe-finder-app

### 2. Install Dependencies

npm install

### 3. Create .env.local file

NEXT_PUBLIC_API_KEY=your_spoonacular_api_key

### 4. Run the development server

npm run dev

recipe-finder-app/
├── app/ # Main application folder (App Router structure)
│   ├── layout.tsx # Root layout component
|   |── global.css # Base styles
│   ├── page.tsx # Homepage 
│   ├── recipes/ # Route segment for listing and searching recipes 
│   │   ├── page.tsx # RecipeListPage – renders search filters & list of results 
│   │   └── [id]/ # Dynamic route for recipe details 
│   │       └── page.tsx # RecipeDetailPage – fetches and shows full recipe details by ID
│   └── page.tsx # fallback page (optional)
├── .env.local # Environment variables (e.g., API key for Spoonacular)
├── .gitignore # Specifies intentionally untracked files to ignore
├── README.md
├── next.config.js # Next.js configuration
├── package.json # Project dependencies and scripts
└── tsconfig.json # TypeScript configuration

Home page 
![image](https://github.com/user-attachments/assets/70549eb5-0e45-42cd-8efe-ad77025b4be8)
RecipeListPage
![image](https://github.com/user-attachments/assets/1d69ded0-1ba7-4446-9b00-28d9df861f79)
RecipeDetailPage
![image](https://github.com/user-attachments/assets/b711491d-2537-451f-a2aa-df15201fc834)

## Features

- **Search Recipes by Name**  
  Quickly find recipes by typing keywords in the search field.

- **Filter by Cuisine Type**  
  Narrow down results based on international cuisines like Italian, Mexican, Chinese, etc.

- **Filter by Maximum Cooking Time**  
  Find recipes that fit your schedule by setting a cooking time limit.

- **Detailed Recipe Pages**  
  View full recipe instructions, ingredients, preparation time, and servings.
