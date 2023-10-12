"use client";

import {
  CarrouselDiv,
  Container,
  Content,
  LowerBannersDiv,
} from "../stylesRouter";

import { Menu } from "@/components/Menu";
import { PrimaryBanner } from "@/components/PrimaryBanner";
import { CarouselCard } from "@/components/CarouselCard";

import Carousel from "better-react-carousel";
import { SecondaryBanner } from "@/components/SecondaryBanner";
import { TertiaryBanner } from "@/components/TertiaryBanner";
import { useEffect, useState } from "react";
import { ProductsProps } from "@/@types/products";
import { api } from "@/lib/axios";

export default function Flowers() {
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
        (product: { tag: number }) => product.tag === 6
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
