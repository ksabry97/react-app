import { Category } from '../components';
const Categories = ({ categories }) => {
  return (
    <div className="w-full grid grid-cols-6 justify-between">
      {categories?.map((category) => (
        <Category
          key={category.id}
          img={category.image}
          name={category.category_name || category.category_name_ar}
          id={category.id}
        />
      ))}
    </div>
  );
};

export default Categories;
