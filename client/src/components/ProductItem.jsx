import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
    return (
      <>
        <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-auto group-hover:opacity-75 lg:h-80">
            <img src={import.meta.env.VITE_UPLOAD_URL + product?.attributes.featured_image?.data?.attributes?.url} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <Link to={'/product/' + product.id}>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {product?.attributes.name}
                </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product?.attributes.categories.data[0]?.attributes.name}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product?.attributes.price}</p>
            </div>
        </div>
      </>
    )
}