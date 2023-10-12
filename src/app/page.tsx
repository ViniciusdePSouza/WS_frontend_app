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

  async function fetchAllTags() {
    const response = await api.get("/products");

    return response;
  }

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllTags();
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
        {products.length > 0 && (
          <PrimaryBanner
            photo={products[0].photo}
            price={products[0].price}
            description={products[0].description}
          />
        )}

        {products.length > 0 && (
          <CarrouselDiv
            cols={3}
            rows={1}
            loop={true}
            gap={0}
            className="carrousel-wrapper"
          >
            {products.map((product) => (
              <Carousel.Item>
                <CarouselCard photo={product.photo} price={product.price} />
              </Carousel.Item>
            ))}
          </CarrouselDiv>
        )}

        <LowerBannersDiv>
          {products.length > 0 && (
            <SecondaryBanner
              photo={products[1].photo}
              name={products[1].name}
              price={products[1].price}
              description={products[1].description}
            />
          )}

          {products.length > 0 && (
            <TertiaryBanner
              photo={products[2].photo}
              name={products[2].name}
              price={products[2].price}
              description={products[2].description}
            />
          )}
        </LowerBannersDiv>
      </Content>
    </Container>
  );
}
