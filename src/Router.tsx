import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductsList } from "./pages/ProductsList";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/productDetail/:slug" element={<ProductDetail />} />
    </Routes>
  );
}