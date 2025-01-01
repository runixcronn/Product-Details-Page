import { Link } from "react-router-dom";

export default function Product({ details }) {
  return (
    <Link to={`/products/${details.id}`} style={{ textDecoration: "none" }}>
      <div className="product">
        <img src={details.image} width="50" alt={details.name} />
        <div className="product-info">
          <h2>{details.name}</h2>
          <p>{details.description}</p>
        </div>
      </div>
    </Link>
  );
}
