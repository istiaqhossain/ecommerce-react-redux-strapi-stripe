import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import ErrorMessage from "../components/ErrorMessage";

export default function Product() {
  const productSlug = useParams().slug;
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  async function fetchData( url ) {
    const response = await fetch( import.meta.env.VITE_API_URL + url, {
      headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_API_TOKEN
      },
    } );
    return response.json();
  }

  async function fetchProductData() {
    try {
      const response = await fetchData( `products?populate=*&filters[slug][$eq]=${productSlug}` );
      
      if ( response.data.length > 0 ) {
        setProduct( response.data[0] );
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  function handleQuantity( amount ) {
    let temp = quantity;
    temp += amount;
    
    if ( temp > 0 ) {
      setQuantity(temp);
    }
  }

  function handleAddToCart() {
    dispatch( addToCart( {
      id: product?.id,
      name: product?.attributes?.name,
      price: product?.attributes?.price,
      image: product?.attributes?.featured_image?.data?.attributes?.url,
      quantity: quantity,
      category: product?.attributes?.categories.data[0]?.attributes?.name,
    } ) );
  }

  if ( product.id === undefined ) {
    return (
      <>
        <ErrorMessage />
      </>
    )
  }

  return (
    <>
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
            <img src={import.meta.env.VITE_UPLOAD_URL + product?.attributes?.featured_image?.data?.attributes?.url} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.attributes?.name}</h1>
            <h2 className="sr-only">Product information</h2>
            <p className="mt-6 text-3xl tracking-tight text-gray-900">${product?.attributes?.price}</p>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product?.attributes?.description}</p>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <fieldset className="mt-2">
                  <legend className="sr-only">Choose a quantity</legend>
                  <div className="mt-2 flex items-center">
                    <button onClick={() => handleQuantity(-1)} type="button" className="rounded-s-md h-11 flex items-center justify-center border border-transparent bg-gray-100 px-3 py-1.5 text-2xl font-light text-gray-900 hover:bg-gray-200">-</button>
                    <span className="h-11 font-bold text-xl w-20 border-0 px-3 py-2 text-center text-gray-900 shadow-sm ring-2 ring-inset ring-gray-100">{quantity}</span>
                    <button onClick={() => handleQuantity(1)} type="button" className="rounded-e-md h-11 flex items-center justify-center border border-transparent bg-gray-100 px-3 py-1.5 text-2xl font-light text-gray-900 hover:bg-gray-200">+</button>
                  </div>
                </fieldset>
              </div>
              <button onClick={handleAddToCart} type="buton" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}