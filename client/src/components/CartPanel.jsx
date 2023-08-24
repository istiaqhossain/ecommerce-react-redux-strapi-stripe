import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../redux/slices/cartSlice";

export default function CartPanel ( { cartPanelToggle, cartPanelToggleHandler } ) {
  const dispatch = useDispatch();
  const products = useSelector( state => state.cart.products );
  
  let productList = products.map( product => 
  <li key={product.id} className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img src={import.meta.env.VITE_UPLOAD_URL + product.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{product.name}</a>
          </h3>
          <p className="ml-4">${product.price}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {product.quantity}</p>

        <div className="flex">
          <button onClick={() => handleRemoveItem(product.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
        </div>
      </div>
    </div>
  </li> 
  );

  let cartContent;

  if ( products.length > 0 ) {
    cartContent = <><div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {productList}
        </ul>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>${totalPrice()}</p>
    </div>
    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
    <div className="mt-6">
      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
    </div>
    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        <button onClick={handleResetCart} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
          Reset Cart
        </button>
      </p>
    </div>
  </div></>;
  } else {
    cartContent = <><div className="mt-6 flex flex-col gap-3 justify-center text-center text-sm text-gray-500">
      <p className="text-gray-900">
        Cart is empty.
      </p>
      <p>
        <button onClick={cartPanelToggleHandler} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue shopping.</button>
      </p>
    </div></>;
  }

  function totalPrice() {
    let total = 0;
    products.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total.toFixed(2);
  }

  function handleResetCart() {
    dispatch( resetCart() );
  }

  function handleRemoveItem(product_id) {
    dispatch( removeItem( {
     id: product_id 
    }) );
  }

    return (
        <>
        <div className={cartPanelToggle ? 'relative z-20' : 'relative z-20 hidden'} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-500"
              From: "opacity-100"
              To: "opacity-0" */} 
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  {/* Slide-over panel, show/hide based on slide-over state.

                  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-full"
                    To: "translate-x-0"
                  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                    From: "translate-x-0"
                    To: "translate-x-full" */}
                <div className="pointer-events-auto relative w-screen max-w-md">
                    {/* Close button, show/hide based on slide-over state.

                    Entering: "ease-in-out duration-500"
                      From: "opacity-0"
                      To: "opacity-100"
                    Leaving: "ease-in-out duration-500"
                      From: "opacity-100"
                      To: "opacity-0" */}
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button onClick={cartPanelToggleHandler} type="button" className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="absolute -inset-2.5"></span>
                      <span className="sr-only">Close panel</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Cart</h2>
                    </div>
                    {cartContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}