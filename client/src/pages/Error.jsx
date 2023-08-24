import { useRouteError } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Error() {
  const error = useRouteError();

    return (
      <>
        <Header />
          
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="px-10 text-center">
                  <h2 className="font-bold text-4xl text-gray-700 mb-5">Oops!</h2>
                  <p className="text-xl">{error.status} {error.statusText}</p>
                  <p className="text-base">{error.data}</p>
              </div>
            </div>
          
        <Footer />
      </>
    )
}