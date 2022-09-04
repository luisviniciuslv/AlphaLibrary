import { CartContainer } from './styles';

import {
  ShoppingCart,
} from "phosphor-react";

interface CartProps {
  onClick: () => void
}

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={23} weight="fill" />
    </CartContainer>
  )
}