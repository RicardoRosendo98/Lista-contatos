import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.div`
  background: #eee;
`
export const Main = styled.main`
  padding: 0 80px;
  margin: 50px 0;
  height: 75vh;
  overflow-y: scroll;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  margin: 50px 0;
`

export const Search = styled.input<Props>`
  border-radius: 8px;
  color: #666666;
  padding: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? '#fff' : 'transparent')};
  border-color: #666666;
  width: 40%;
  border: 1px solid ${(props) => (props.active ? '#1659d2' : 'transparent')};
  outline: none;
`
export const Theme = styled.button<Props>`
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => (props.active ? '#000' : '#eee')};
  background-color: ${(props) => (props.active ? '#eee' : '#000')};
  border: 1px solid ${(props) => (props.active ? '#000' : '#eee')};

  i {
    margin-right: 8px;
  }
`
