import { useRouter } from "next/router";

import ReactStars from "react-rating-stars-component";
import { defaultTheme } from "../../styles/themes/default";

import { ShoppingCart, Star, StarHalf } from "phosphor-react";

import { Cart } from '../Cart'

import {
  Buy,
  BuyButton,
  Description,
  MangaCardContainer,
  MangaImage,
  Price,
  Title,
} from "./styles";

interface MangaCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  destacado?: boolean;
}

export function MangaCard({
  id,
  image,
  title,
  description,
  price,
  rating,
  destacado = false,
}: MangaCardProps) {
  const router = useRouter();

  return (
    <MangaCardContainer
      destacado={destacado}
      onClick={() =>
        router.push({
          pathname: "/product/[id]",
          query: { id: 1 },
        })
      }
    >
      <MangaImage src={image} alt="" width={155} height={242} />
      <Title>{title}</Title>

      <Description>{description.substring(0, 70)}...</Description>

      <Buy>
        {"R$"}
        <Price>{price.toFixed(2).replace(".", ",")}</Price>
        <Cart />
      </Buy>

      <ReactStars
        count={5}
        isHalf={true}
        size={24}
        edit={false}
        value={rating}
        emptyIcon={<Star />}
        halfIcon={<StarHalf />}
        fullIcon={<Star weight="fill" />}
        activeColor={defaultTheme["green-500"]}
      />
    </MangaCardContainer>
  );
}
