import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/category.selector";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categories = useSelector(categoriesSelector);

  return (
    <>
      {categories &&
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        })}
    </>
  );
};

export default CategoriesPreview;
