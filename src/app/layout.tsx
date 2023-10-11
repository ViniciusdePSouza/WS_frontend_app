"use client";
import StyledComponentsRegistry from "@/lib/registry";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/theme/default";
import { GlobalStyle } from "@/styles/global,";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
