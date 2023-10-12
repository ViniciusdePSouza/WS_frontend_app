"use client";
import StyledComponentsRegistry from "@/lib/registry";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme/default";
import { Header } from "@/components/Header";
import { CartProvider } from "@/hooks/cartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <StyledComponentsRegistry>
            <ThemeProvider theme={defaultTheme}>
              <Header />
              <Providers>{children}</Providers>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </CartProvider>
      </body>
    </html>
  );
}
