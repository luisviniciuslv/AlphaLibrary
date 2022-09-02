import { HeaderContainer, HeaderContent, Info, InfoContainer } from "./styles";

import Logo from '../../assets/Logo.svg'
import Image from "next/image";
import { ShoppingCart, MapPin } from "phosphor-react";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src={Logo} alt="" />
        </Link>
        <InfoContainer>
          <Info>
            <MapPin size={22} weight="fill" />
            <p>São Paulo, SP</p>
          </Info>
          <a href="/checkout">
            <Info>
              <ShoppingCart size={22} weight="fill" />
            </Info>
          </a>
        </InfoContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}