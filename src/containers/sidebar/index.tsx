import { Link, useNavigate } from 'react-router-dom'

import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import * as enums from '../../utils/enums/contact'
import { ButtonAdd } from './styles'

type Props = {
  mostrarFiltros: boolean
}

const Sidebar = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.Header>
              <S.Title>
                <img src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png" />
                Contatos
              </S.Title>
            </S.Header>
            <div>
              <S.Filter>
                <S.ButtonAdd>
                  <Link to={'/Res'}>
                    <i className="fa-solid fa-plus"></i>Criar Contato
                  </Link>
                </S.ButtonAdd>
                <FilterCard counter={1} subtitle={'Todos'} criterio="todas" />
                <FilterCard
                  valor={enums.Status.ORDEM}
                  counter={1}
                  subtitle={'A-Z'}
                  criterio="ordem"
                />
                <FilterCard
                  valor={enums.Status.ONLINE}
                  counter={1}
                  subtitle={'Online'}
                  criterio="online"
                />
                <FilterCard
                  valor={enums.Status.OFFLINE}
                  counter={1}
                  subtitle={'Off-line'}
                  criterio="off-line"
                />
              </S.Filter>
            </div>
          </>
        ) : (
          <ButtonAdd onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </ButtonAdd>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
