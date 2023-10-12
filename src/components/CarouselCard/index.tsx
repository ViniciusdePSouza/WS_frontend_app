import { Container } from "./styles";

interface CarouselCardProps {
    photo: string;
    price: number;
}

export function CarouselCard({photo , price}:CarouselCardProps ){
    return <Container>
        <img src={photo} alt="" />
        <span>{`$${Number(price).toFixed(2)}`}</span>
    </Container>
}