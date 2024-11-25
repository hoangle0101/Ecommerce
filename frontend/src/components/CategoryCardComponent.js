import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  const imageStyle = {
    width: '100%', // Chiều rộng mong muốn
    height: '460px', // Chiều cao mong muốn
    objectFit: 'cover', // Đảm bảo ảnh không bị méo
  };
  return (
    <Card>
      <Card.Img style={imageStyle} crossOrigin="anonymous" variant="top" src={category.image ?? null} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          {category.description}
        </Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;

