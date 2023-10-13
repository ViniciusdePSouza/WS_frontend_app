"use client"
import { Menu } from "@/components/Menu";
import { Container, Content } from "../stylesRouter";
import { CardCart } from "@/components/cartCard";
import { useCart } from "@/hooks/cartContext";
import { TotalRow } from "./styles";

export default function Cart(){
    const { cart } = useCart()

    return <Container>
        <Menu/>
        <Content>
            <h1>My cart itens</h1>
            {
                cart && cart.map(product => (
                    <CardCart key={product.id} name={product.name} price={product.price} quantity={product.quantity !== undefined ? product.quantity : 1} />
                ))
            }

            <TotalRow>
                <h3>Total</h3>
                <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
            </TotalRow>
        </Content>
    </Container>
}