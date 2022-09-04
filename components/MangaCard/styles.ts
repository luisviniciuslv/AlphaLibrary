import styled from "styled-components";
import css from "styled-jsx/css";
import Image from "next/image";

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