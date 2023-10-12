import { Button } from "../Button";
import { Container, Content, ProductInfo } from "./styles";
import { ProductsProps } from "@/@types/products";
import { useCart } from "@/hooks/cartContext";

interface SecondaryBannerProps {
  product: ProductsProps;
}

export function TertiaryBanner({ product }: SecondaryBannerProps) {
  const { addProduct } = useCart();

  const productToCart = {
    ...product,
    quantity: 1,
  };
  return (
    <Container>
      <Content>
        <img src={product.photo} alt="Product Photo" />
        <ProductInfo>
          <strong>{product.name}</strong>

          <button onClick={() => addProduct(productToCart)}>For Free</button>

          <span>High Quality Product</span>
        </ProductInfo>
      </Content>
      <p>{product.description}</p>
    </Container>
  );
}
