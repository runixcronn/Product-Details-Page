import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../utilities/useFetch";
import Loader from "./Loader";

export default function ProductDetails() {
  // Ürün bilgilerini tutacak state
  const [product, setProduct] = useState(null);
  // useParams hook'u ile URL'den parametre alınması
  const { id } = useParams();
  // useFetch hook'u ile veri çekme
  const { get, loading } = useFetch(
    "https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app"
  );

  // Ürün bilgilerini çekme
  useEffect(() => {
    console.log("Current product ID:", id); // For debugging
    get(`/productdetails/id${id}.json`)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "green", fontFamily: "Arial" }}
      >
        Back home
      </Link>
      <div style={{ fontFamily: "Arial" }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <img src={product.image} width="100" alt={product.name} />
      </div>
    </div>
  );
}
