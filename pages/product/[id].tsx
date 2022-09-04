import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  ChatText,
  Files,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  StarHalf,
} from "phosphor-react";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import DefaultLayout from "../../components/Layout";
import { MangaImage } from "../../components/MangaCard";
import { defaultTheme } from "../../styles/themes/default";

export const ProductContainer = styled.div`
  display: flex;

  gap: 1.5rem;

  svg {
    color: ${(props) => props.theme["green-500"]};
  }
`;

export const ResumeCard = styled.div`
  padding: 1.125rem 2.75rem;

  background-color: ${(props) => props.theme["gray-900"]};
  border-radius: 6px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["green-500"]};
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 8.562rem;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 4px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  :focus {
    box-shadow: none;
  }
`;

export const Buy = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BuyButton = styled.button`
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme["gray-800"]};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.437rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Description = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 1.5rem;

  border-radius: 6px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  text-align: center;
`;

export const Unity = styled.p`
  margin-top: 0.3rem;
  font-size: 1.25rem;
`;

export const Pages = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  margin-top: 0.5rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1rem;
`;

export const Tag = styled.div`
  padding: 0.5rem 0.75rem;

  border-radius: 4px;

  background-color: ${(props) => props.theme["green-500"]};
`;

export const TitleDesc = styled.h2`
  align-self: flex-start;

  font-size: 1.25rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const MangaDesc = styled.p`
  align-self: flex-start;
  font-size: 1rem;
  font-weight: 100;

  margin-top: 0.75rem;
`;

const Product: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [amount, setAmount] = useState(0);

  function handleAmountChange(quant: number) {
    if (amount + quant >= 0) {
      setAmount(amount + quant);
    }
  }

  useEffect(() => {
    if (!id) {
      return;
    }
  }, [id]);

  if (!id) {
    return <h1></h1>;
  }

  return (
    <DefaultLayout>
      <ProductContainer>
        <ResumeCard>
          <MangaImage
            src={"https://cdn.myanimelist.net/images/anime/1045/123711.jpg"}
            alt=""
            width={195}
            height={304}
          />
          <Rating>
            <ReactStars
              count={5}
              isHalf={true}
              size={24}
              edit={false}
              value={4}
              emptyIcon={<Star />}
              halfIcon={<StarHalf />}
              fullIcon={<Star weight="fill" />}
              activeColor={defaultTheme["green-500"]}
            />
            {4}
          </Rating>
          <Buy>
            <Amount>
              <Button onClick={() => handleAmountChange(1)}>
                <Plus size={23} weight="bold" />
              </Button>
              {amount}
              <Button onClick={() => handleAmountChange(-1)}>
                <Minus size={23} weight="bold" />
              </Button>
            </Amount>
            <BuyButton>
              <ShoppingCart size={23} weight="fill" />
            </BuyButton>
          </Buy>
        </ResumeCard>
        <Info>
          <Description>
            <Title>One Piece: East Blue: Volume 7</Title>
            <Unity>
              <strong>30 </strong>
              Unidades
            </Unity>
            <Pages>
              <Files size={20} />
              Quantidade de Páginas
              <strong> 200 </strong>
            </Pages>
            <Tags>
              <Tag>Romance</Tag>
              <Tag>Romance</Tag>
              <Tag>Romance</Tag>
              <Tag>Romance</Tag>
              <Tag>Romance</Tag>
            </Tags>
          </Description>
          <Description>
            <TitleDesc>
              <ChatText size={20} />
              Descrição
            </TitleDesc>
            <MangaDesc>lorem Ipsum Dolor Met lorem Ipsum Dolor Met</MangaDesc>
          </Description>
        </Info>
      </ProductContainer>
    </DefaultLayout>
  );
};

export default Product;
