import styled from 'styled-components'
export const Button = styled.button`
  padding: 12px;
  width: 250px;
  background: ${({ theme }) => theme.colors.primary};
  outline: 0;
  font-size: 16px;
  color: white;
  cursor: pointer;
  border-radius: 7px;
  border: none;
`
