import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/themes/default";
import Header from "../Header";

interface DefaultLayoutProps {
  children: ReactNode;
} 

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}