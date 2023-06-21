//Utilizar tecnologia *JWT* utilizando a chave secreta **andra3RPW@8aZ** para conversão da senha.
//Utilizar o pacote *jsonwebtoken* para gerar o token.
//Utilizar o pacote *bcrypt* para criptografar a senha.
import {decode} from 'jsonwebtoken'

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//utilizar o jwt para converter a senha com a chave secreta

  const JWT_KEY = 'andra3RPW@8aZ'

  export const generateToken = (payload: any) => {
    return jwt.sign(payload, JWT_KEY)
  }

  export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_KEY)
  }

  export const hash = (plainText: string) => {
    return bcrypt.hashSync(plainText, 10)
  }


  