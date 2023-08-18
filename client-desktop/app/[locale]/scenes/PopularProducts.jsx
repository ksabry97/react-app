import { PopularProductsList } from '.';
const PopularProducts = ({ popularProducts, tags }) => {
  if (!popularProducts) return;
  return (
      <PopularProductsList popularProducts={popularProducts} tags={tags} />
  );
};

export default PopularProducts;
