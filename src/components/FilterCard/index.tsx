import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFilter } from '../../Store/reducers/filter'
import * as enums from '../../utils/enums/contact'

export type Props = {
  active?: boolean
  counter: number
  subtitle: string
  criterio: 'online' | 'off-line' | 'todas' | 'ordem'
  valor?: enums.Status
}

const FilterCard = ({ active, counter, subtitle, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alterarFilter({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card active={active} onClick={filtrar}>
      <S.Label>
        <i className="fa-solid fa-address-book fa-2xs"></i>
        {subtitle}
      </S.Label>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default FilterCard
