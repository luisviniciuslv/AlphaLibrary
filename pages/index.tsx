import type { NextPage } from "next";
import DefaultLayout from "../components/Layout";

import axios from "axios";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../assets/Banner.svg";
import { MangaCard } from "../components/MangaCard";
import { MangaDocument } from "../src/model/manga";

export const MangaCards = styled.div`
  margin-top: 3.125rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  gap: 3.125rem 5.625rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export const SearchArea = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  background-color: ${(props) => props.theme["gray-900"]};

  padding: 0.5rem;

  border-radius: 6px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 0.562rem 0.375rem;

  background-color: ${(props) => props.theme["white-50"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["gray-900"]};
  }
`;

export const SearchInput = styled.input`
  border: none;

  width: 31.75rem;

  color: ${(props) => props.theme["gray-800"]};

  ::placeholder {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 1rem;
    font-weight: 400;
  }

  :focus {
    box-shadow: none;
  }
`;

export const Select = styled.select`
  border: none;

  width: 19.125rem;
  padding: 0.6rem 0.375rem;

  border-radius: 6px;

  color: ${(props) => props.theme["gray-800"]};
  font-size: 1rem;
  font-weight: 400;
`;

const Home: NextPage = () => {
  const [mangas, setMangas] = useState<MangaDocument[]>([]);
  const [mostRatingMangas, setMostRatingMangas] = useState<MangaDocument[]>([]);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleGenderChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setGender(event.target.value);
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/mangas/getBy/?name=${name}&gender=${gender}`
      )
      .then((response) => {
        setMangas(response.data);
      });
  }, [name, gender]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/mangas/rating").then((response) => {
      setMostRatingMangas(response.data);
    });
  }, []);

  return (
    <DefaultLayout>
      <Image src={Banner} alt="" />
      <Title>Destaques</Title>
      <MangaCards>
        {mostRatingMangas.slice(0, 3).map((manga) => (
          <MangaCard
            key={String(manga._id)}
            id={String(manga._id)}
            title={manga.name}
            image={manga.imageUrl}
            description={manga.description}
            price={manga.price}
            rating={manga.stars}
            destacado
          />
        ))}
      </MangaCards>
      <SearchArea>
        <p>Descobrir</p>
        <SearchContent>
          <SearchInputContainer>
            <MagnifyingGlass size={18} />
            <SearchInput
              placeholder="Pesquisar"
              onChange={handleNameChange}
              value={name}
            />
          </SearchInputContainer>
          <Select onChange={handleGenderChange} value={gender}>
            <option value="">Categorias</option>
            <option value="romance">Romance</option>
            <option value="ação">Ação</option>
            <option value="escolar">Escolar</option>
            <option value="comédia">Comédia</option>
            <option value="drama">Drama</option>
            <option value="fantasia">Fantasia</option>
            <option value="sobrenatural">Sobrenatural</option>
            <option value="suspense">Suspense</option>
            <option value="aventura">Aventura</option>
            <option value="piratas">Piratas</option>
            <option value="mistério">Mistério</option>
            <option value="ficção ciêntifica">Ficção Cientirica</option>
          </Select>
        </SearchContent>
      </SearchArea>
      <MangaCards>
        {mangas.map((manga) => (
          <MangaCard
            key={String(manga._id)}
            id={String(manga._id)}
            title={manga.name}
            image={manga.imageUrl}
            description={manga.description}
            price={manga.price}
            rating={manga.stars}
          />
        ))}
      </MangaCards>
    </DefaultLayout>
  );
};

export default Home;
