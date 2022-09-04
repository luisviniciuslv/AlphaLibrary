import styled from 'styled-components';

export const CartContainer = styled.button`
  border: none;
  border-radius: 6px;

  background-color: ${props => props.theme['gray-800']};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.437rem;
`