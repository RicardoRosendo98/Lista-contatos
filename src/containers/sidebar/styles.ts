import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #eee;
  padding: 0 40px;
  margin: 50px 0;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;

  .fa-bars {
    font-size: 24px;
    margin-right: 16px;
  }

  img {
    width: 32px;
    margin-right: 8px;
  }
`

export const Aside = styled.aside`
  padding: 0px 16px 0 0;
  background-color: #eee;
  height: 100vh;
`

export const Filter = styled.div`
  display: grid;
  grid-gap: 16px;
  margin-top: 16px;
`

export const ButtonAdd = styled.button`
  padding: 16px 32px;
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 16px auto;
  font-size: 16px;
  border: 1px solid #1659d2;
  background-color: #eee;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #1659d2;
  }

  i {
    margin-right: 8px;
    font-size: 18px;
  }

  :hover {
    border: 1px solid transparent;
    background-color: #1659d2;

    a {
      color: #eee;
    }
  }
`
