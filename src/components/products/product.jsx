import React, { useEffect, useState } from "react";
import { token } from "../../Helper/HTTPMethod.Helper";
import jwtDecode from 'jwt-decode'
import { Col, Card, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cart";
import swal from "sweetalert";
import { getProducts } from '../../servicesMethods/ProductServices/productServices';
import { showError, showSuccess } from "../../Helper/Toastify.Helper";
import { useHistory } from 'react-router-dom';
import { Spinner } from '../../ShareComponents/SpinnerComponent/Spinner';
import { AppPagination } from '../../ShareComponents/Pagination/Pagination';

export const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 3;
  const [products, setProducts] = useState({
    products: [],
    totalCount: 0,
    from: 0,
    to: pageSize
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const all = JSON.parse(localStorage.getItem("savedData"));
  useEffect(async () => {
    setIsLoading(true);
    const res = await getProducts(products.from, products.to);
    console.log(res);
    if (res)
      setProducts({
        products: res.Products,
        totalCount: res.totalCount
      });
    setIsLoading(false);
  }, [getProducts]);

  const addCart = (item) => {
    if (token) {
      try {
        jwtDecode(token)
        dispatch(addToCart(item));
        all.push(item);
        localStorage.setItem("savedData", JSON.stringify(all));
        showSuccess('Added to cart');
      } catch (error) {
        history.push('/login')
      }
    } else
      showError('You have to login first so you can buy');
  };
  return (
    <div className="container">
      <Spinner isActive={isLoading} />
      {products != [] && <div
        className="titleMain"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <h1>OUR PRODUCTS</h1>
      </div>}
      <Row xs={1} md={3} className="g-4">
        {products && products != [] &&
          products && products.products.map((item) => {
            return (<Col key={item}>
              <Card
                style={{ textAlign: "left", width: "90%", height: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src={item && item.image}
                  height="200px"
                  width="200px"
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "18px" }}>
                    {item && item.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "13px" }}>

                    {typeof (item && item.description) == 'String' ? item && item.description : "N/A"}
                  </Card.Text>
                  <Card.Text style={{ fontSize: "16px" }}>
                    Price: {item && item.price} $
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
            </Col>);
          })}
      </Row>
{/* 
      <AppPagination
        count={Math.ceil(products.totalCount / pageSize)}
        pageSize = {pageSize}
      /> */}
    </div>
  );
};


