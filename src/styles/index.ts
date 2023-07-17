import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #eee;
}

::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #888;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 256px auto;
`

export default EstiloGlobal
