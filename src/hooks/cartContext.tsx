import { CardProductsProps } from "@/@types/cartProduct";
import { ProductsProps } from "@/@types/products";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
    cart: ProductsProps[];
    addProduct: (product: ProductsProps) => void;
    deleteProduct: (id: number) => void;
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CardProductsProps[]>([])
    
    function addProduct(newProduct: CardProductsProps) {
        const isProductInTheCart = cart.some(product => product.id === newProduct.id)

        if (isProductInTheCart) {
            const updatedCart = cart.map(product => {
              if (product.id === newProduct.id) {
                if (product.quantity !== undefined) {
                    return { ...product, quantity: product.quantity + 1 };
                  } else {
                    return { ...product, quantity: 1 };
                  }
              }
              return product;
            });
            localStorage.setItem('@ws-front:cart', JSON.stringify(updatedCart));
            console.log(updatedCart); 
            setCart(updatedCart);
        }  else {
            const updatedCart = [...cart, { ...newProduct, quantity: 1 }];
            console.log(updatedCart)
            localStorage.setItem('@ws-front:cart', JSON.stringify(updatedCart)); 
            setCart(updatedCart);
        }

        
    }

    function deleteProduct(id: number) {
        const filteredCart = cart.filter(product => (product.id !== id))
        localStorage.setItem('@ws-front:cart', JSON.stringify(filteredCart)); 
        setCart(filteredCart);
    }

    useEffect(() => {
        const cartList = localStorage.getItem('@ws-front:cart')

        if(cartList) setCart(JSON.parse(cartList))
    },[])

    return (
        <CartContext.Provider value={{cart, addProduct, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext)

    return context
}

export { CartProvider, useCart }