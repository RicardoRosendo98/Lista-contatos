import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Form, MainContainer, Titulo, Campo, Salvar } from './styles'
import { cadastrar } from '../../Store/reducers/contacts'
import * as enums from '../../utils/enums/contact'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')

  const cadastarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        name,
        phone,
        email,
        birthday,
        id: 0,
        status: enums.Status.ONLINE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastarTarefa}>
        <Campo
          value={name}
          onChange={(evento) => setName(evento.target.value)}
          type="text"
          placeholder="Nome do Contanto"
        />
        <Campo
          value={phone}
          type="number"
          onChange={(evento) => setPhone(parseInt(evento.target.value))}
          placeholder="Número de telefone"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="Email do Contanto"
        />
        <Campo
          value={birthday}
          onChange={(evento) => setBirthday(evento.target.value)}
          type="text"
          placeholder="Data de Aniversario"
        />

        <Salvar type="submit">Cadastrar</Salvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
