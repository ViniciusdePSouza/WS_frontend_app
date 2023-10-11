import Image from "next/image";
import { ButtonDiv, Container, Content, ImageDiv } from "./styles";
import { Button } from "../Button";

interface PrimaryBannerProps {
  photo: string;
  price: number;
  description: string;
}

export function PrimaryBanner({
  photo,
  price,
  description,
}: PrimaryBannerProps) {
  return (
    <Container>
      <ImageDiv>
        <img
          src={photo}
          alt={"Product image"}
        />
      </ImageDiv>
      <Content>
        <span>{`$${Number(price).toFixed(2)}`}</span>
        <p>{description}</p>
        <ButtonDiv>
        <Button title={"Buy"} isLoading={false}/>
        </ButtonDiv>

      </Content>
    </Container>
  );
}
