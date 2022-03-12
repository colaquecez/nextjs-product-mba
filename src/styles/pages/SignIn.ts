import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;

  input {
    margin-bottom: 16px;
  }

  button {
    margin-top: 16px;
  }
`

export const LabelError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 32px;
`

// REMOVER PARA COMPONENT
export const Card = styled.div`
  background: white;
  padding: 16px;
  width: 170px;
  margin: 10px;
  p {
    color: black;
  }
`
