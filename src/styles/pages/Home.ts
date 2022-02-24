import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
