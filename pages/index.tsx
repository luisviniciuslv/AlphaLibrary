import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout'

import Banner from '../assets/Banner.svg'
import Image from 'next/image'
import { MangaCard } from '../components/MangaCard'

import styled from "styled-components";

export const MangaCards = styled.div`
  margin-top: 3.125rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  gap: 3.125rem 5.625rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
`

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Image src={Banner} alt="" />
      <Title>Destaques</Title>
      <MangaCards>
        <MangaCard
          id='1'
          title='Yofukashi no Uta'
          image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
          description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
          price={10.99}
          rating={4.5}
          destacado
        />
        <MangaCard
        id='1'
        title='Yofukashi no Uta'
        image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
        description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
        price={10.99}
        rating={4.5}
        destacado
        />
        <MangaCard
          id='1'
          title='Yofukashi no Uta'
          image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
          description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
          price={10.99}
          rating={4.5}
          destacado
        />
      </MangaCards>
      <Title>Descobrir</Title>
      <MangaCards>
        <MangaCard
          id='1'
          title='Yofukashi no Uta'
          image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
          description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
          price={10.99}
          rating={4.5}
        />
        <MangaCard
        id='1'
        title='Yofukashi no Uta'
        image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
        description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
        price={10.99}
        rating={4.5}
        />
        <MangaCard
          id='1'
          title='Yofukashi no Uta'
          image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
          description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
          price={10.99}
          rating={4.5}
        />
        <MangaCard
          id='1'
          title='Yofukashi no Uta'
          image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
          description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
          price={10.99}
          rating={4.5}
        />
        <MangaCard
        id='1'
        title='Yofukashi no Uta'
        image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
        description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
        price={10.99}
        rating={4.5}
        />
        <MangaCard
          id='1'
          title='Yofukashi no Uta'
          image='https://cdn.myanimelist.net/images/anime/1045/123711.jpg'
          description='Kou Yamori é um estudante médio do ensino médio que luta para entender o complexo conceito de amor. Por ver pouco sentido em se render à norma, logo deixa de ir à escola. Atormentado com insônia devido à sua ociosidade, Kou começa a vagar pelas ruas solitárias à noite.'
          price={10.99}
          rating={4.5}
        />
      </MangaCards>
    </DefaultLayout>
  )
}

export default Home
