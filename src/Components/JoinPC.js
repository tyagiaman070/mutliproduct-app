import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Products from "./Products";

import CartProducts from "./CartProducts";

export default function JoinPC({ productName, productPrice, productCount }) {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("Product is Already in Cart", {
        type: "error",
      });
      return;
    }
    setCartItem([...cartItem, item]);
    toast("Product Added SUCCESS", {
      type: "success",
    });
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Product Purchased Success fully", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
    toast("Product Removal SUCCESS", {
      type: "success",
    });
  };

  return (
    <div>
      <Container fluid>
        <ToastContainer />
        <Row>
          <Col md="12" className="mt-5">
            <Products
              addInCart={addInCart}
              productPrice={productPrice}
              productName={productName}
              productCount={productCount}
            />
          </Col>
          <Col md="12" className="mt-5">
            <CartProducts
              cartItem={cartItem}
              removeItem={removeItem}
              buyNow={buyNow}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
