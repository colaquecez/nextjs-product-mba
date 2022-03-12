import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;

  input {
    margin-bottom: 16px;
  }

  button {
    margin-top: 16px;
  }
`

export const LoadingText = styled.p`
  text-align: center;
  padding: 24px;
  font-size: 18px;
`

export const LabelError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 32px;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;

  button {
    padding: 12px;
    width: 250px;
    background: ${({ theme }) => theme.colors.primary};
    outline: 0;
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 7px;
    border: none;
  }

  button:disabled {
    background: grey;
    cursor: not-allowed;
  }
`
