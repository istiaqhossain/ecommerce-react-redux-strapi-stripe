import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Product() {

  const productId = parseInt(useParams().id);
  const {data:product, loading, error} = useFetch(`products/${productId}?populate=*`);

    return (
      <>
        
      <div className="bg-white">
        <div className="pt-16">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">Category</a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">Sub Category</a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Product Name</a>
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img src={import.meta.env.VITE_UPLOAD_URL + product?.attributes.featured_image?.data?.attributes?.url} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.attributes.name}</h1>
              <h2 className="sr-only">Product information</h2>
              <p className="mt-6 text-3xl tracking-tight text-gray-900">${product?.attributes.price}</p>
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product?.attributes.description}</p>
                </div>
              </div>

              <form className="mt-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Quantity</h3>

                  <fieldset className="mt-2">
                    <legend className="sr-only">Choose a quantity</legend>
                    <div className="mt-2 flex gap-2">
                      <button type="button" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1.5 text-2xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">-</button>
                      <input type="number" min="1" max="999" step="1" className="font-bold text-xl w-20 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6" />
                      <button type="button" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1.5 text-2xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">+</button>
                    </div>
                  </fieldset>
                </div>

                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      </>
    )
}