"use client";

import { Menu } from "@/components/Menu";
import { CarrosselDiv, Container, Content } from "./stylesRouter";
import { PrimaryBanner } from "@/components/PrimaryBanner";

export default function Home() {
  return (
    <>
      <Container>
        <Menu />
        <Content>
          <PrimaryBanner
            photo={"https://picsum.photos/100/200"}
            price={7.86}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting inLorem Ipsum is simply dummy text of the printing and typesetting inLorem Ipsum is simply dummy text of the printing and typesetting in"
            }
          />

          <CarrosselDiv>
            
          </CarrosselDiv>
        </Content>
      </Container>
    </>
  );
}
