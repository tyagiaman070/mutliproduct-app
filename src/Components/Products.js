import React, { useState, useEffect } from "react";
import axios from "axios";

//faker Data
import { random } from "faker";
import { Container, Col, Row } from "reactstrap";
import Cart from "./Cart";
//card

const APIKEY = "563492ad6f9170000100000115879a50065f4bd48ca15a533b12fafb";

export default function Products({
  addInCart,
  productPrice,
  productName,
  productCount,
}) {
  const [product, setProduct] = useState([]);

  function getRandomNumber() {
    if (productPrice === "50000") {
      const max = 99999;
      // console.log("hello 1");
      return Math.floor(Math.random() * (max - productPrice)) + productPrice;
    } else {
      const min = 1;
      // console.log("hello3");
      return Math.floor(Math.random() * (productPrice - min)) + min;
    }
  }

  const fetchPhotos = async () => {
    try {
      if (productName !== "") {
        const APIURL = `https://api.pexels.com/v1/search?query=${productName}&per_page=${productCount}&page=1`;
        const res = await axios({
          method: "get",
          url: APIURL,
          headers: {
            Authorization: "Bearer " + APIKEY,
          },
        });

        const { data } = await res;
        // console.log("res", res);
        // console.log("data", data);

        //real code
        const { photos } = data;

        const allProduct = photos.map((photo) => ({
          smallImage: photo.src.medium,
          tinyImage: photo.src.tiny,
          productName: random.word(),
          productPrice: getRandomNumber(parseInt(productPrice)),
          id: random.uuid(),
        }));

        setProduct(allProduct);
      } else {
        const APIURL = `https://api.pexels.com/v1/search?query=food&per_page=${productCount}&page=1`;
        const res = await axios({
          method: "get",
          url: APIURL,
          headers: {
            Authorization: "Bearer " + APIKEY,
          },
        });

        const { data } = await res;
        // console.log("res", res);
        // console.log("data", data);

        //real code
        const { photos } = data;

        const allProduct = photos.map((photo) => ({
          smallImage: photo.src.large,
          tinyImage: photo.src.tiny,
          productName: random.word(),
          productPrice: getRandomNumber(),
          id: random.uuid(),
        }));

        // allProduct.filter((data) => {
        //   return data.productPrice < 500;
        // });

        setProduct(allProduct);
      }
    } catch (err) {
      // console.log("====================================");
      console.log("ERROR AAGAYA", err);
      // console.log("====================================");
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [productName, productPrice, productCount]);

  return (
    <Container fluid>
      <h1 className="text-danger text-center">Try To add Product in Cart</h1>
      {productName !== "" ? (
        <Row>
          {product.map((product) => (
            <Col md={4} key={product.id}>
              <Cart product={product} addInCart={addInCart} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          {product.map((product) => (
            <Col md={4} key={product.id}>
              <Cart product={product} addInCart={addInCart} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
