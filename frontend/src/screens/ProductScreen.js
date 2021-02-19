import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data)
    }
    fetchProduct()
  }, []);
  
  return (
    <div>
      <Link to="/" className="btasdasdn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={7}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup varinat="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={2}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <stro>${product.price}</stro>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Row>
                <Col>Stauts:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
							<Button className="btn-block" type="button" disabled={product.countInStock == 0}>Add to cart</Button>
						</ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;