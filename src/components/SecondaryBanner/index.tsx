import { Button } from "../Button";
import { Container, Content, ProductInfo } from "./styles";

interface SecondaryBannerProps {
  photo: string;
  price: number;
  description: string;
  name: string;
}

export function SecondaryBanner({
  photo,
  price,
  description,
  name,
}: SecondaryBannerProps) {
  return (
    <Container>
      <Content>
        <img src={photo} alt="Product Photo" />
        <ProductInfo>
          <strong>Only {`$${Number(price).toFixed(2)}`}</strong>
          <span>{name}</span>
          <p>{description}</p>
        </ProductInfo>
      </Content>

      <Button title={"Buy Now"} isLoading={false}/>
    </Container>
  );
}
