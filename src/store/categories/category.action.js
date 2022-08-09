import { CATEGORIES_ACTION_TYPES } from "./category.action.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
};

const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const catergoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(catergoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
