import { MangaImage, MangaCardContainer, Description, Buy, Price, Title, BuyButton } from "./styles";

import { ShoppingCart, Star, StarHalf } from "phosphor-react";

interface MangaCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  destacado?: boolean;
}

import ReactStars from "react-rating-stars-component";
import { defaultTheme } from "../../styles/themes/default";

export function MangaCard({ id, image, title, description, price, rating, destacado = false }: MangaCardProps) {
  return (
    <MangaCardContainer destacado={destacado}>
      <MangaImage src={image} alt="" width={155} height={242} />
      <Title>{title}</Title>

      <Description>{description.substring(0, 70)}...</Description>
      
      <Buy>
        {'R$'}
        <Price>{price.toFixed(2).replace(".", ",")}</Price>
        <BuyButton>
          <ShoppingCart size={22} weight="fill" />
        </BuyButton>
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
  )
}