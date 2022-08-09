import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.components";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { categoriesIsLoadingSelector } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Shop = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(categoriesIsLoadingSelector);
  useEffect(() => {
    const getCategories = async () => {
      dispatch(fetchCategoriesAsync());
    };
    getCategories();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=":category" element={<Category />} />
        </Routes>
      )}
    </>
  );
};

export default Shop;
