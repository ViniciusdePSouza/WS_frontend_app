import { Button } from "../Button";
import { Container, Content, ProductInfo } from "./styles";
import { ProductsProps } from "@/@types/products";
import { useCart } from "@/hooks/cartContext";

interface SecondaryBannerProps {
  product: ProductsProps;
}

export function SecondaryBanner({ product }: SecondaryBannerProps) {
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
          <strong>Only {`$${Number(product.price).toFixed(2)}`}</strong>
          <span>{product.name}</span>
          <p>{product.description}</p>
        </ProductInfo>
      </Content>

      <Button
        title={"Buy Now"}
        isLoading={false}
        onClick={() => addProduct(productToCart)}
      />
    </Container>
  );
}
