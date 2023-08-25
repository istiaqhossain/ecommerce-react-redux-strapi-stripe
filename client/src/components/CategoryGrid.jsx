import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryGrid({ heading }) {
  const [categories, setCategories] = useState([]);

  async function fetchData(url) {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
      },
    });
    return response.json();
  }

  async function fetchCategoriesData() {
    try {
      const response = await fetchData(`categories?populate=*&sort=id:desc`);

      if (response.data.length > 0) {
        setCategories(response.data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {heading}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
