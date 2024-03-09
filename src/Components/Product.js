import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const [Nproduct, setNproduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNproduct(data);
      });
  }, []);

  return (
    <div className="card myProductcard">
      <h1>Product {Nproduct.id} details</h1>
      <img
        src={Nproduct.image}
        className="card-img-top"
        alt="Product loading.."
      />
      <div className="card-body">
        <h5 className="card-title">{Nproduct.title}</h5>
        <p className="card-text">{Nproduct.description}</p>
        <a href="" className="btn btn-primary">
          Go to Product
        </a>
      </div>
    </div>
  );
};
export default Product;
