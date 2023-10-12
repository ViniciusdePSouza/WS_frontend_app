import { Button } from "../Button";
import { Container, Content, ProductInfo } from "./styles";

interface SecondaryBannerProps {
  photo: string;
  price: number;
  description: string;
  name: string;
}

export function TertiaryBanner({
  photo,
  description,
  name,
}: SecondaryBannerProps) {
  return (
    <Container>
      <Content>
        <img src={photo} alt="Product Photo" />
        <ProductInfo>
          <strong>{name}</strong>

          <button>For Free</button>

          <span>High Quality Product</span>
        </ProductInfo>
      </Content>
      <p>{description}</p>
    </Container>
  );
}
