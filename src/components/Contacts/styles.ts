import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/contact'

type TagProps = {
  status?: enums.Status
}

function corDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === enums.Status.ONLINE) return variaveis.verde
    if (props.status === enums.Status.OFFLINE) return '#999999'
  }

  return variaveis.azulTema
}

export const ContactCard = styled.div`
  background-color: #fcfcfc;
  box-shadow: rgba(0, 6, 0, 0.2) 8px 8px 10px,
    rgba(0, 0, 0, 0.05) 12px 12px 10px;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
`

export const Table = styled.table`
  border-spacing: 64px 16px;
`

export const Th = styled.th`
  font-weight: bold;
  font-size: 18px;
`

export const Td = styled.td`
  width: 192px;

  input {
    background-color: transparent;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid #fff;
  }

  input:disabled {
    border: 1px solid transparent;
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => corDeFundo(props)};
  border-radius: 8px;
`
export const ActionBar = styled.div`
  padding-top: 16px;
`

export const Button = styled.button`
  font-weight: bold;
  border-radius: 50px;
  font-size: 16px;
  color: #fff;
  padding: 20px;
  margin-right: 16px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.verde};
`
export const ButtonSave = styled(Button)`
  background-color: ${variaveis.azulTema};
`
export const ButtonCancel = styled(Button)`
  background-color: ${variaveis.vermelho1};
`

export const ButtonRmove = styled(Button)`
  background-color: ${variaveis.vermelho2};
`
