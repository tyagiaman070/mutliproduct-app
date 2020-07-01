import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Container, Col, Row } from "reactstrap";
import JoinPC from "./Components/JoinPC";
const SelectCate = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(10);
  const [productCount, setProductCount] = useState(9);
  const productNamefun = (e) => {
    setProductName(e.target.value);
  };

  const productMoneyfun = (e) => {
    setProductPrice(e.target.value);
  };

  // console.log("PRODUCT", productName);
  // console.log("PRICE", productPrice);

  const dropdownCountfun = (e) => {
    setProductCount(e.target.value);
  };

  const dropdownList = () => (
    <select
      onChange={(e) => {
        productNamefun(e);
      }}
      className="dropdown_list_product modif"
      name=""
      id=""
    >
      <option value="food">food</option>
      <option value="fruit">fruit</option>
      <option value="pasta">pasta</option>
      <option value="coffee">coffee</option>
      <option value="cake">cake</option>
      <option value="mobile">mobile</option>
      <option value="laptop">laptop</option>
      <option value="ipad">ipad</option>
      <option value="tablet">tablet</option>
      <option value="imac">imac</option>
      <option value="iphone">iphone</option>
      <option value="earphone">earphone</option>
      <option value="ipod">ipod</option>
      <option value="keyboards">keyboards</option>
    </select>
  );

  const dropdownMoneyList = () => (
    <select
      onChange={(e) => {
        productMoneyfun(e);
      }}
      className="dropdown_list_price modif"
      name=""
      id=""
    >
      <option value="10">Less than 10</option>
      <option value="100">Less than 100</option>
      <option value="500">Less than 500</option>
      <option value="1000">Less than 1000</option>
      <option value="5000">Less than 5000</option>
      <option value="10000">Less than 10000</option>
      <option value="50000">Above 50000</option>
    </select>
  );

  const dropdownCount = () => {
    return (
      <select
        onChange={(e) => {
          dropdownCountfun(e);
        }}
        className="dropdown_list_count modif"
        name=""
        id=""
      >
        <option value="9">9</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="43">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
      </select>
    );
  };

  return (
    <div>
      <Container
        fluid
        style={{
          marginTop: "0px",
          alignContent: "center",
          textAlign: "center",
        }}
        className="div_outer"
      >
        <h2 className="text-center text-white mt-0 pt-5 mb-4">
          This Web App uses Fake Name and Fake prices! which are for demo
        </h2>
        <h5 className="text-center text-white">Made by:&nbsp;Aman Tyagi</h5>
        <br />
        <h5 className="text-center text-white">
          Mail:&nbsp;
          <a className="myMail" href="mailto:tyagi.aman070@gmail.com">
            tyagi.aman070@gmail.com
          </a>
        </h5>
        <br />
        <h5 className="text-center text-white">
          About Me:&nbsp;
          <span className="text-danger">
            Just a Web developer who want to learn new tech used for web
            development &nbsp;:)
          </span>
        </h5>
        <br />
        <br />

        {/* <Row>
          <div
            className=""
            style={{
              backgroundImage: `url(${hello})`,
              height: "100vh",
              width: "100vw",
            }}
          >
            {productName !== "" ? (
              <h1>{productName} Products Below </h1>
            ) : (
              <h1>food Products Below </h1>
            )}
          </div>
        </Row> */}

        <Row
          className="text-white"
          style={{ fontWeight: "bolder", fontSize: "20px" }}
        >
          <Col md="6" lg="4" sm="12" xs="12">
            <span className="text-white">PRODUCT NAME:</span>&nbsp;
            {dropdownList()}
          </Col>
          <Col md="6" lg="4" sm="12" xs="12">
            <span className="text-warning">PRODUCT PRICE:</span>&nbsp;
            {dropdownMoneyList()}
          </Col>
          <Col md="6" lg="4" sm="12" xs="12">
            <span className="text-info">PRODUCT COUNT:</span>&nbsp;
            {dropdownCount()}
          </Col>
        </Row>
      </Container>
      <div
        style={
          {
            // backgroundImage: `url(${hello})`,
          }
        }
        className="cards-div"
      >
        <JoinPC
          productName={productName}
          productPrice={productPrice}
          productCount={productCount}
        />
      </div>
    </div>
  );
};

export default SelectCate;
