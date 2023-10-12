import { ButtonDiv, Container, Content, ImageDiv } from "./styles";
import { Button } from "../Button";
import { useCart } from "@/hooks/cartContext";
import { ProductsProps } from "@/@types/products";

interface PrimaryBannerProps {
  product: ProductsProps;
}

export function PrimaryBanner({ product }: PrimaryBannerProps) {
  const { addProduct } = useCart();

  const productToCart = {
    ...product,
    quantity: 1,
  };

  return (
    <Container>
      <ImageDiv>
        <img src={product.photo} alt={"Product image"} />
      </ImageDiv>
      <Content>
        <span>{`$${Number(product.price).toFixed(2)}`}</span>
        <p>{product.description}</p>
        <ButtonDiv>
          <Button
            title={"Buy"}
            isLoading={false}
            onClick={() => addProduct(productToCart)}
          />
        </ButtonDiv>
      </Content>
    </Container>
  );
}
