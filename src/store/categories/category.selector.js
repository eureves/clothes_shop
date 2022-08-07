import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const categoriesSelector = createSelector([selectCategories], (state) =>
  state.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
