import useFetch from "../hooks/useFetch";
import ProductItem from './ProductItem';

export default function ProductGrid({ heading, type }) {

  const {data:products, loading, error} = useFetch(`products?populate=*&sort=id:desc&filters[type][$eq]=${type}`);
  
    return (
      <>
        
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{ heading }</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              error 
              ? "Something is wrong"
              : loading 
              ? "Loading" 
              : products?.map(product => <ProductItem key={product.id} product={product} />)
            }
            </div>
        </div>
        
      </>
    )
}