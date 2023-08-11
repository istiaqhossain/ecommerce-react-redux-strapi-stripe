import { Link } from "react-router-dom";

export default function Footer() {

    return (
      <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4">
                  <Link to={'/'} className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Your Company</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </>
    )
}