import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.components";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const catergoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(catergoriesArray));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
