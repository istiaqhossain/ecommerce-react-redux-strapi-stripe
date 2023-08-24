import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPanel from "./CartPanel";

export default function Header() {
  const [cartPanelToggle, setCartPanelToggle] = useState(false);
  const cartProducts = useSelector( state => state.cart.products );

  function handleCartPanelToggle() {
    setCartPanelToggle(!cartPanelToggle);
  }

    return (
      <>
        <header className="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to={'/'} className="-m-1.5 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100">Your Company</Link>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to={'/shop'} className="text-sm font-semibold leading-6 text-gray-900">Shop</Link>
              <Link to={'/product-category/1'} className="text-sm font-semibold leading-6 text-gray-900">Product Category</Link>
              <Link to={'/product/1'} className="text-sm font-semibold leading-6 text-gray-900">Product</Link>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Checkout</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button onClick={handleCartPanelToggle} className="text-sm font-semibold leading-6 text-gray-900">
                Cart 
                <sup className="ml-1">{ cartProducts.length }</sup>
              </button>
            </div>
          </nav>
          {/* Mobile menu, show/hide based on menu open state. */}
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on slide-over state. */}
            <div className="fixed inset-0 z-10"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Your Company
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Shop</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product Category</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Checkout</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <CartPanel cartPanelToggle={cartPanelToggle} cartPanelToggleHandler={handleCartPanelToggle} />
      </>
    )
}