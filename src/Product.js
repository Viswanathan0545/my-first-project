import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './products.json';
import {addtocart} from './Cart.js'
// import Cart from "./Cart.js";

export default function Product() {
  const { id } = useParams();
  console.log("ID:", id);
  const product = data[id];

  return (
      <div className="prod">
          <div className="pic">
              <div id="carouselExampleInterval" className="carousel slide siz" data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="10000">
                          <img src={product.image1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                          <img src={product.image2} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                          <img src={product.img3} className="d-block w-100" alt="..." />
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
          <div className="detals">
              <div className="details">
                  <h1>{id}</h1>
                  <h4>{product.price}</h4>
              </div>
              <div className="des">
                  <div>
                      <h2>Description</h2>
                      <p>{product.des}</p>
                  </div>
                  <div>
                      <h2>Specification</h2>
                      <ul>
                          {product.spec.map((temp, index) => (
                              <li key={index}>{temp}</li>
                          ))}
                      </ul>
                  </div>
                  <div>
                      <button type="button" className="btn btn-primary" onClick={() => { addtocart(id); alert('Added to Cart Successfully'); }}>Add to cart</button>
                  </div>
              </div>
          </div>
      </div>
  );
}
