import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import DefaultLayout from "../../components/Layout";

import { MangaImage } from "../../components/MangaCard/styles";

import {
  ChatText,
  Files,
  Minus,
  Plus,
  Star,
  StarHalf,
} from "phosphor-react";

import { defaultTheme } from "../../styles/themes/default";

import {
  Amount,
  Button,
  Buy,
  Description,
  Info,
  MangaDesc,
  Pages,
  ProductContainer,
  Rating,
  ResumeCard,
  Tag,
  Tags,
  Title,
  TitleDesc,
  Unity,
} from "../../styles/pages/product";

import { Cart } from "../../components/Cart";

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
            <Cart />
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
