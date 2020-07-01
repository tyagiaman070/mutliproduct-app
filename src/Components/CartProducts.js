import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardBody,
  Card,
  CardHeader,
  CardFooter,
  Col,
  Row,
} from "reactstrap";
export default function CartProducts({ cartItem, removeItem, buyNow }) {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <div>
      <Container fluid>
        <h1 className="text-danger text-center"> Your Cart </h1>
        <ListGroup>
          {cartItem.map((item) => (
            <ListGroupItem key={item.id}>
              <Row>
                <Col>
                  <img
                    src={item.tinyImage}
                    alt="NO DATA FOUND"
                    className="cartImage"
                  />
                </Col>
                <Col className="text-center">
                  <div
                    className="text-primary cart-name"
                    // style={{
                    //   marginTop: "13px",
                    //   fontSize: "30px",
                    //   fontWeight: "bolder",
                    // }}
                  >
                    Product Name: {item.productName}
                  </div>

                  <div
                    className="text-warning cart-price"
                    // style={{ fontSize: "30px", fontWeight: "bolder" }}
                  >
                    Product Price: {item.productPrice}
                  </div>

                  <Button
                    color="danger"
                    className="btn btn-block cart-button"
                    onClick={() => removeItem(item)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* if NO ITEM IN CART */}
        {cartItem.length >= 1 ? (
          <Card className="text-center mt-3 mb-5">
            <CardHeader>Total Amount</CardHeader>

            <CardBody>
              Your Amount for {cartItem.length} products is {amount}
            </CardBody>
            <CardFooter>
              <Button color="success" onClick={buyNow}>
                Pay Now
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <h1 className="text-center text-warning mb-5">
            Your Cart is Empty! Try to Add Item to cart
          </h1>
        )}
      </Container>
    </div>
  );
}
