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

  color: ${props => props.theme['gray-800']};
  font-size: 1rem;
  font-weight: 400;
`