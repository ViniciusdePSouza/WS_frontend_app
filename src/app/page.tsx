"use client";

import { Menu } from "@/components/Menu";
import {
  CarrouselDiv,
  Container,
  Content,
  LowerBannersDiv,
} from "./stylesRouter";
import { PrimaryBanner } from "@/components/PrimaryBanner";
import { useEffect, useState } from "react";
import { ProductsProps } from "@/@types/products";
import { api } from "@/lib/axios";
import { SecondaryBanner } from "@/components/SecondaryBanner";
import { TertiaryBanner } from "@/components/TertiaryBanner";

import Carousel from "better-react-carousel";
import { CarouselCard } from "@/components/CarouselCard";

export default function Home() {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function fetchAllProducts() {
    const response = await api.get("/products");

    return response;
  }

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllProducts();
      const allProducts = response.data;
      const filteredByTagProducts = allProducts.filter(
        (product: { tag: number }) => product.tag === 2
      );
      setProducts(filteredByTagProducts);
    }

    populateAllTags();
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        {products.length > 0 && <PrimaryBanner product={products[0]} />}

        {products.length > 0 && (
          <CarrouselDiv
            cols={3}
            rows={1}
            loop={true}
            gap={0}
            className="carrousel-wrapper"
          >
            {products.map((product) => (
              <Carousel.Item key={product.id}>
                <CarouselCard photo={product.photo} price={product.price} />
              </Carousel.Item>
            ))}
          </CarrouselDiv>
        )}

        <LowerBannersDiv>
          {products.length > 0 && <SecondaryBanner product={products[1]} />}

          {products.length > 0 && <TertiaryBanner product={products[2]} />}
        </LowerBannersDiv>
      </Content>
    </Container>
  );
}
