import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { ProductsList } from "./pages/ProductsList";

export function Router() {

  return (
    <Routes>
      <Route path={"/" /* `${import.meta.env.VITE_GITHUB_BASE_PROJECT}/` */} element={<ProductsList />} />
      <Route path={"/productDetail/:slug"  /* `${import.meta.env.VITE_GITHUB_BASE_PROJECT}/productDetail/:slug` */} element={<ProductDetail />} />
    </Routes>
  );
}