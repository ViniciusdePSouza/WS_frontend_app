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
        <h3>{name}</h3>
      </FirstColumn>
      <Column>
        <span>
          Quantity:{" "}
          {quantity.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </span>
      </Column>
      <Column>
        <span>{`$${Number(price).toFixed(2)}`}</span>
      </Column>
    </Container>
  );
}
