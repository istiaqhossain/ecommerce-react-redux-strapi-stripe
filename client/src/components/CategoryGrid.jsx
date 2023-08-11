import useFetch from "../hooks/useFetch";
import CategoryItem from './CategoryItem';

export default function CategoryGrid({ heading }) {

  const {data:categories, loading, error} = useFetch(`categories?populate=*&sort=id:desc`);

    return (
      <>
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{ heading }</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {
                    error 
                    ? "Something is wrong"
                    : loading 
                    ? "Loading" 
                    : categories?.map(category => <CategoryItem key={category.id} category={category} />)
                  }
                </div>
            </div>
        </div>
      </>
    )
}