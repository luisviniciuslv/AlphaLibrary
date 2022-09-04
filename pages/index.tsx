import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout'

import Banner from '../assets/Banner.svg'
import Image from 'next/image'
import { MangaCard } from '../components/MangaCard'

import styled from "styled-components";
import { MagnifyingGlass } from 'phosphor-react'

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

export const SearchArea = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`

export const SearchContent = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  background-color: ${props => props.theme['gray-900']};

  padding: 0.5rem;

  border-radius: 6px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 0.562rem 0.375rem;

  background-color: ${props => props.theme['white-50']};
  border-radius: 6px;

  svg {
    color: ${props => props.theme['gray-900']};
  }
`

export const SearchInput = styled.input`
  border: none;

  width: 31.75rem;

  color: ${props => props.theme['gray-800']};

  ::placeholder {
    color: ${props => props.theme['gray-400']};
    font-size: 1rem;
    font-weight: 400;
  }

  :focus {
    box-shadow: none;
  }
`

export const Select = styled.select`
  border: none;

  width: 19.125rem;
  padding: 0.6rem 0.375rem;

  border-radius: 6px;
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
