import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
export default function Cart({ product, addInCart }) {
  return (
    <div>
      {product !== undefined ? (
        <Card className="mt-2 mb-2">
          <CardImg top height="350" width="100%" src={product.smallImage} />
          <CardBody className="text-center">
            <CardTitle> Product Name: {product.productName} </CardTitle>
            <CardText className="secondary">
              Product Price: Rs {product.productPrice}
            </CardText>

            <Button color="success" onClick={() => addInCart(product)}>
              Add to Cart
            </Button>
          </CardBody>
        </Card>
      ) : (
        <h1>OOPS :( NO PRODUCT LEFT</h1>
      )}
    </div>
  );
}
