import styled from 'styled-components'

export const Card = styled.div`
  background: white;
  padding: 16px;
  width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: black;
    font-size: 21px;
    font-weight: 600;
    margin-top: 16px;
  }

  .favorite {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
  }
`
