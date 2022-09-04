import Image from "next/image";
import Link from "next/link";

import Logo from '../../assets/Logo.svg';
import { MapPin, ShoppingCart } from "phosphor-react";

import {
  HeaderContainer,
  InfoContainer,
  HeaderContent,
  Info
} from "./styles";

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