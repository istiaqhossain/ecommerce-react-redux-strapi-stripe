import ProductGrid from '../components/ProductGrid';
import CategoryGrid from '../components/CategoryGrid';

export default function Home() {

    return (
      <>
        <ProductGrid heading={'Featured Products'} type={'featured'} />
        <CategoryGrid heading={'Categories'} />
        <ProductGrid heading={'Trending Products'} type={'trending'} />
      </>
    )
}