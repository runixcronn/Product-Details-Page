import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../utilities/useFetch";
import Loader from "./Loader";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { get, loading } = useFetch(
    "https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app"
  );

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
      <Link to="/">Back home</Link>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <img src={product.image} width="100" alt={product.name} />
      </div>
    </div>
  );
}
