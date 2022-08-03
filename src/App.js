import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckoutPage from "./routes/chockout/checkout.component";
import CategoryPreview from "./components/category-preview/category-preview.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;