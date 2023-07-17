import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import Contact from '../../components/Contacts'
import { RootReducer } from '../../Store'
import { alterarTermo } from '../../Store/reducers/filter'

export type Props = {
  active?: boolean
}

const ListContact = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContact = () => {
    if (termo) {
      return itens.filter(
        (item) => item.name.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
  }

  const contatos = filterContact()

  return (
    <S.Container>
      <p>
        Possuou {contatos.length} contatos {termo}
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <S.Header>
        <S.Search
          type="text"
          placeholder="🔍  Pesquisar"
          active
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Theme>
          <i className="fa-solid fa-moon"></i>Trocar Tema
        </S.Theme>
      </S.Header>
      <S.Main>
        <ul>
          {contatos.map((c) => (
            <li key={''}>
              <Contact
                name={c.name}
                phone={c.phone}
                email={c.email}
                birthday={c.birthday}
                status={c.status}
                id={c.id}
              ></Contact>
            </li>
          ))}
        </ul>
      </S.Main>
    </S.Container>
  )
}

export default ListContact
