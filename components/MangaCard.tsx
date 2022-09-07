import styled from "styled-components";
import Image from "next/image";
import css from "styled-jsx/css";
import ReactStars from "react-rating-stars-component";
import { ShoppingCart, Star, StarHalf } from "phosphor-react";
import { defaultTheme } from "../styles/themes/default";
import { useRouter } from "next/router";

interface MangaCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  destacado?: boolean;
}

interface MangaCardContainerProps {
  destacado: boolean;
}

export const MangaCardContainer = styled.button<MangaCardContainerProps>`
  border: none;
  background: none;
  cursor: pointer;

  min-height: 26.312rem;
  max-width: 19.5rem;
  
  background-color: ${props => props.theme["gray-900"]};
  border-radius: 6px 60px 6px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => props.destacado ? css`border: 2px solid ${props.theme["green-500"]};` : null}

  padding-bottom: 1rem;

  color: ${props => props.theme["white-50"]};
`

export const MangaImage = styled(Image)`
  border-radius: 6px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.25rem;

  padding: 1rem 2rem;

  text-align: center;
`

export const Description = styled.div`
  font-weight: 300;
  text-align: center;

  padding: 0 0.5rem;
`

export const Buy = styled.div`
  padding-top: 2rem;

  display: flex;
  align-items: center;
`

export const Price = styled.div`
  font-weight: bold;
  font-size: 2rem;
`

export const BuyButton = styled.div`
  border: none;
  border-radius: 6px;

  background-color: ${props => props.theme["gray-800"]};
  color: ${props => props.theme["green-500"]};

  padding: 0.5rem;

  margin-left: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export function MangaCard({ id, image, title, description, price, rating, destacado = false }: MangaCardProps) {
  const router = useRouter();
  
  return (
    <MangaCardContainer
      destacado={destacado}
      onClick={() => router.push({
        pathname: '/product/[id]',
        query: { id: id }
      })}
    >
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