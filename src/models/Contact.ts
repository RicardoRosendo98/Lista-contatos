import * as enums from '../utils/enums/contact'

class Contato {
  name: string
  phone: number
  email: string
  birthday: string
  status: enums.Status
  id: number

  constructor(
    name: string,
    phone: number,
    email: string,
    birthday: string,
    status: enums.Status,
    id: number
  ) {
    this.name = name
    this.phone = phone
    this.email = email
    this.birthday = birthday
    this.status = status
    this.id = id
  }
}

export default Contato
