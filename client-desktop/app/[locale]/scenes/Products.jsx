import { ProductCard } from '../components';

const Products = ({ products }) => {
  return (
    <div className="w-full grid justify-evenly grid-cols-5 gap-x-1 sm:gap-x-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} bgColor={'bg-screen'} />
      ))}
    </div>
  );
};

export default Products;
