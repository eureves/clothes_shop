import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklick: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composedEnchancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnchancers);
export const persistor = persistStore(store);
