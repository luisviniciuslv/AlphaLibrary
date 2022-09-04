import { ReactNode } from "react";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

import { GlobalStyle } from "../../styles/global";
import Header from "../Header";

import { LayoutContainer } from "./styles";

interface DefaultLayoutProps {
  children: ReactNode;
} 

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>AlphaLibrary</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </LayoutContainer>
  )
}