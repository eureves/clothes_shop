import { createContext, useEffect, useState } from "react";

import { SHOP_DATA } from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = { categories };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const catergoryMap = await getCategoriesAndDocuments();
      setCategories(catergoryMap);
    };
    getCategoriesMap();
  }, []);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
