import { Trash } from "@phosphor-icons/react";
import { Column, Container, FirstColumn } from "./styles";
import { useCart } from "@/hooks/cartContext";

interface CardCartProps {
  name: string;
  price: number;
  quantity: number;
  id: number;
}

export function CardCart({ name, quantity, price, id }: CardCartProps) {
  const { deleteProduct } = useCart();

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
      <Column>
        <button onClick={() => deleteProduct(id)}><Trash size={32} /></button>
      </Column>
    </Container>
  );
}
