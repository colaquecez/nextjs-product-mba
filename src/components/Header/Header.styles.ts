import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;

  .name {
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
  }

  p,
  a:last-child {
    margin-right: 32px;
  }

  button {
    all: unset;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.error};
  }
`
