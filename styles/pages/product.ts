import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;

  gap: 1.5rem;

  svg {
    color: ${props => props.theme['green-500']};
  }
`

export const ResumeCard = styled.div`
  padding: 1.125rem 2.75rem;

  background-color: ${props => props.theme['gray-900']};
  border-radius: 6px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${props => props.theme['green-500']};
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 8.562rem;
  padding: 0.5rem;

  background-color: ${props => props.theme['gray-800']};
  border-radius: 4px;
`

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
`

export const Buy = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Description = styled.div`
  background-color: ${props => props.theme['gray-900']};
  padding: 1.5rem;

  border-radius: 6px;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  text-align: center;
`

export const Unity = styled.p`
  margin-top: 0.3rem;
  font-size: 1.25rem;
`

export const Pages = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  margin-top: 0.5rem;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1rem;
`

export const Tag = styled.div`
  padding: 0.5rem 0.75rem;

  border-radius: 4px;

  background-color: ${props => props.theme['green-500']};
`

export const TitleDesc = styled.h2`
  align-self: flex-start;

  font-size: 1.25rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;
`

export const MangaDesc = styled.p`
  align-self: flex-start;
  font-size: 1rem;
  font-weight: 100;

  margin-top: 0.75rem;
`