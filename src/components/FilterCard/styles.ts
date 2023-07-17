import styled from 'styled-components'

type Props = {
  active?: boolean
}

export const Card = styled.div<Props>`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${(props) => (props.active ? '#1659d2' : '#1967d2')};
  color: ${(props) => (props.active ? '#eee' : '#1967d2')};
  background-color: ${(props) => (props.active ? '#1967d2' : '#eee')};
  border-radius: 0 32px 32px 0;
  cursor: pointer;

  i {
    margin-right: 10px;
    font-size: 24px;
  }
`
export const Counter = styled.span`
  font-weight: bold;
  font-size: 16px;
`
export const Label = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
`
