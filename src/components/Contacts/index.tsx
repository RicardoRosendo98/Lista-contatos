import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../Store/reducers/contacts'
import Contato from '../../models/Contact'

type Props = Contato

const Contact = ({
  name: nameOriginal,
  phone,
  email: emailOriginal,
  birthday: birthdayOriginal,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [inEdit, setIndEdit] = useState(false)
  const initials = nameOriginal.match(/\b\w/)?.join('').toUpperCase() || ''
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  useEffect(() => {
    if (nameOriginal.length > 0) {
      setName(nameOriginal)
      setEmail(emailOriginal)
      setBirthday(birthdayOriginal)
    }
  }, [nameOriginal, emailOriginal, birthdayOriginal])

  function cancelEdit() {
    setIndEdit(false)
    setName(nameOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.ContactCard>
      <div>
        <S.Avatar style={{ background: color }}>{initials}</S.Avatar>
        <S.Table>
          <thead>
            <tr>
              <S.Th>
                <i className="fa-solid fa-file-signature"></i> Nome
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-phone"></i> Telefone
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-envelope"></i> E-mail
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-cake-candles"></i> Aniversario
              </S.Th>
              <S.Th>
                <i className="fa-solid fa-signal"></i> Status
              </S.Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.Td>
                <input
                  disabled={!inEdit}
                  value={name}
                  onChange={(evento) => setName(evento.target.value)}
                />
              </S.Td>
              <S.Td>
                <input disabled={!inEdit} value={phone} />
              </S.Td>
              <S.Td>
                <input
                  disabled={!inEdit}
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
                />
              </S.Td>
              <S.Td>
                <input
                  disabled={!inEdit}
                  value={birthday}
                  onChange={(evento) => setBirthday(evento.target.value)}
                />
              </S.Td>
              <S.Tag status={status}>{status}</S.Tag>
            </tr>
          </tbody>
        </S.Table>
      </div>
      <S.ActionBar>
        {inEdit ? (
          <>
            <S.Button
              onClick={() => {
                dispatch(
                  editar({
                    name,
                    phone,
                    email,
                    birthday,
                    status,
                    id
                  })
                )
                setIndEdit(false)
              }}
            >
              <i className="fa-solid fa-check"></i>
            </S.Button>
            <S.ButtonCancel onClick={cancelEdit}>
              <i className="fa-solid fa-x"></i>
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <S.ButtonSave onClick={() => setIndEdit(true)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </S.ButtonSave>
            <S.ButtonRmove onClick={() => dispatch(remover(id))}>
              <i className="fa-solid fa-trash"></i>
            </S.ButtonRmove>
          </>
        )}
      </S.ActionBar>
    </S.ContactCard>
  )
}

export default Contact
