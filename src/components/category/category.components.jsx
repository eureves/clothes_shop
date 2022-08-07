import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesSelector } from "../../store/categories/category.selector";
import ProductCard from "../product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles.jsx";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(categoriesSelector);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </>
  );
};

export default Category;
