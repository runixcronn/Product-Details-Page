import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreFront from "./pages/StoreFront";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
