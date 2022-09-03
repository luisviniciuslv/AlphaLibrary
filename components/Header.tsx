import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme["gray-900"]};

  padding: 1.875rem 10rem;
`

export const HeaderContent = styled.div`
  max-width: 70rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  display: flex;

  gap: 0.75rem;
`

export const Info = styled.div`
  background-color: ${props => props.theme["gray-800"]};
  border-radius: 6px;
  
  display: flex;
  align-items: center;
  
  padding: 0.75rem;
  gap: 0.375rem;

  svg {
    color: ${props => props.theme["green-500"]};
  }

  p {
    color: ${props => props.theme["white-50"]};
    font-weight: 300;
  }

`

import Logo from '../assets/Logo.svg'
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