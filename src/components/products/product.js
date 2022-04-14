import React, { useEffect, useState } from "react";
import { token } from "../../Helper/HTTPMethod.Helper";
import { Col, Card, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cart";
import swal from "sweetalert";
import { getProducts } from '../../servicesMethods/ProductServices/productServices';

export const Allproduct = () => {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();

  const all = JSON.parse(localStorage.getItem("savedData"));
  useEffect(async () => {
    const res = await getProducts();
    console.log(res);
    if (res)
    setProducts([...res.Products])
  }, []);

  const addCart = (item) => {
    if (token) {
      dispatch(addToCart(item));
      all.push(item);
      localStorage.setItem("savedData", JSON.stringify(all));
      swal({
        title: "Added to cart ",
        icon: "success",
        button: "OK",
      });
    } else {
      swal({
        title: "You have to login first so you can buy",
        icon: "error",
        button: "OK",
      });
    }
  };
  return (
    <div className="container">
      <div
        className="titleMain"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <h1>OUR PRODUCTS</h1>
      </div>

      <Row xs={1} md={3} className="g-4">
        {products &&
          products.map((item) => {
            return (
              <Col key={item.id}>
                <Card
                  style={{ textAlign: "left", width: "90%", height: "100%" }}
                >
                  {/* <Card.Img
                    variant="top"
                    src={item.image}
                    height="200px"
                    width="200px"
                  /> */}
                  <Card.Body>
                    <Card.Title style={{ fontSize: "18px" }}>
                      {item.name}
                    </Card.Title>
                    {/* <Card.Text style={{ fontSize: "13px" }}>
                      {item.description}
                    </Card.Text> */}
                    <Card.Text style={{ fontSize: "16px" }}>
                      Price: {item.price} $
                    </Card.Text>
                    <Button
                      style={{
                        width: "40%",
                        fontSize: "16px",
                        backgroundColor: "#ffcd08",
                        color: "black",
                        border: "none",
                        fontSize: "13px",
                      }}
                      variant="primary"
                      onClick={() => {
                        addCart(item);
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const addProduct = async () => {
    await addProduct({ name, price, description, image });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <input
        type="number"
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>

      <input
        type="text"
        placeholder="Image Link"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      ></input>

      <button onClick={addProduct}>add</button>
    </div>
  );
};
