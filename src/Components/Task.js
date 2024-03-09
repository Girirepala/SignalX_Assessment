import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
const Task = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
    });
  }, []);
  function getNewproductdata() {
    const getProductName = document.getElementById("getProductName").value;
    const getProductPrice = document.getElementById("getProductPrice").value;
    const images = document.getElementById("getProductImage").value;
    const id = getProductName + 1000;
    const getProductImage = `https://fakestoreapi.com/${id}`;
    function object(id, title, image, price) {
      return {
        id: id,
        title: title,
        image: image,
        price: price,
      };
    }

    const newProduct = object(
      id,
      getProductName,
      getProductImage,
      getProductPrice
    );
    JSON.stringify(newProduct);
    setProduct([...Product, newProduct]);
    console.log(Product);
  }
  return (
    <div>
      <h1>Total Product:{Product.length}</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add products
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label>ProductName: </label>
              <input
                type="text"
                placeholder="ProductName..."
                id="getProductName"
              />
              <br />
              <br />
              <label>Product Price: </label>
              <input
                type="text"
                placeholder="Product Price..."
                id="getProductPrice"
              />
              <br />
              <br />
              <label>Product Image: </label>
              <input type="file" id="getProductImage" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  getNewproductdata();
                }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {Product.map((e) => {
          return <Productcard key={e.id} data={e} />;
        })}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Prev
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Task;
