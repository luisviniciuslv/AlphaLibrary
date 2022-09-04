import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout'
import Banner from '../assets/Banner.svg'
import Image from 'next/image'

import { MangaCard } from '../components/MangaCard'
import { MagnifyingGlass } from 'phosphor-react'

import {
  Title,
  MangaCards,
  Select,
  SearchInput,
  SearchInputContainer,
  SearchContent,
  SearchArea
} from '../styles/pages'

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
      <SearchArea>
        <p>Descobrir</p>
        <SearchContent>
          <SearchInputContainer>
            <MagnifyingGlass size={18} />
            <SearchInput placeholder='Pesquisar' />
          </SearchInputContainer>
          <Select>
            <option value=''>Categorias</option>
            <option value='romance'>Romance</option>
            <option value='ação'>Ação</option>
            <option value='militar'>Militar</option>
            <option value='shounem'>Shounem</option>
          </Select>
        </SearchContent>
      </SearchArea>
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
