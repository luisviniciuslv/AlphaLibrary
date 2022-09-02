import { ReactNode } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";
import Header from "../Header";
import { LayoutContainer } from "./styles";

import Logo from '../../static/Logo_2.svg'

interface DefaultLayoutProps {
  children: ReactNode;
} 

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href={Logo} />
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