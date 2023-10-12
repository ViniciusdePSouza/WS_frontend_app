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
        (product: { tag: number }) => product.tag === 1
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

        <CarrouselDiv />

        <LowerBannersDiv>
          {products.length > 0 && (
            <SecondaryBanner
              photo={products[0].photo}
              name={products[0].name}
              price={products[0].price}
              description={products[0].description}
            />
          )}

          {products.length > 0 && (
            <TertiaryBanner
              photo={products[0].photo}
              name={products[0].name}
              price={products[0].price}
              description={products[0].description}
            />
          )}
        </LowerBannersDiv>
      </Content>
    </Container>
  );
}
