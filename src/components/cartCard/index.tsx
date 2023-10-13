import { Column, Container, FirstColumn } from "./styles";

interface CardCartProps {
  name: string;
  price: number;
  quantity: number;
}

export function CardCart({ name, quantity, price }: CardCartProps) {
  return (
    <Container>
      <FirstColumn>
        <span>{ name }</span>
      </FirstColumn>
      <Column>
        <span> Quantity: { quantity }</span>
      </Column>
      <Column>
        <span>{`$${Number(price).toFixed(2)}`}</span>
      </Column>
    </Container>
  );
}
