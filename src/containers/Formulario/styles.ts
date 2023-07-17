import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-weight: bold;
  display: block;
  font-size: 18px;
  margin: 40px 0;
`

export const Campo = styled.input`
  border-radius: 8px;
  color: #666666;
  padding: 8px;
  font-weight: bold;
  background-color: #fff;
  border-color: #666666;
  width: 100%;
`
export const Salvar = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
  background-color: ${variaveis.verde};
`
