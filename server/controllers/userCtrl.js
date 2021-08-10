const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {
  createAccessToken,
  createRefreshToken,
} = require('../utils/generateToken')

const userCtrl = {
  //cria usuario
  register: async (req, res) => {
    try {
      //pega os dados que foi digitado no front
      const { name, email, password } = req.body

      //verifica se existe no banco alguem com o email
      const user = await Users.findOne({ email })
      if (user) return res.status(400).json({ err: 'Esse email ja existe.' })

      //cria o hash da senha
      const passwordHash = await bcrypt.hash(password, 12)

      //cria o arquivo para salvar no banco
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      })
      //sava no banco
      await newUser.save()

      res.status(200).json({ msg: 'Cadastro realizado com sucesso!' })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  },
  // login usuario
  login: async (req, res) => {
    try {
      //pega os dados que foi digitado no front
      const { email, password } = req.body

      //verifica se acha no banco alguem com o email igual ao digitado
      const user = await Users.findOne({ email })
      if (!user) return res.status(400).json({ err: 'Usuario nao existe.' })

      //verifica se a senha digitada é igual ao do banco
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

      //cria o token
      const access_token = createAccessToken({ id: user._id })
      //cria o refresh token
      const refresh_token = createRefreshToken({ id: user._id })

      //envia msg os tokens e o user com as informaçoes do banco
      res.json({
        msg: 'Logado com sucesso!',
        refresh_token,
        access_token,
        user: {
          name: user.name,
          email: user.email,
          favorites: user.favorites,
        },
      })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  },
  // logout usuario
  logout: async (req, res) => {
    try {
      //limpar o cookie do navegador
      res.clearCookie('refreshtoken', { path: '/user/refresh_token' })

      return res.json({ msg: 'Feito logout' })
    } catch (error) {
      return res.json({ msg: error.message })
    }
  },
  //verifica token
  refreshToken: async (req, res) => {
    try {
      //verifica se existe um refreshtoken nos cookies
      const rf_token = req.cookies.refreshtoken
      if (!rf_token) return res.status(400).json({ err: 'Logue Por Favor!' })

      //verifica se o refreshtoken é igual ao refreshtoken do projeto
      const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
      if (!result)
        return res
          .status(400)
          .json({ err: 'Seu token esta incorreto ou expirado.' })

      //verifica se acha no banco alguem com o id = ao id do result
      const user = await Users.findById(result.id)
      if (!user) return res.status(400).json({ err: 'Usuario nao existe.' })

      //cria o token baseado no id do banco
      const access_token = createAccessToken({ id: user._id })

      //retorna o token e o user criado
      res.json({
        access_token,
        user: {
          name: user.name,
          email: user.email,
          favorites: user.favorites,
        },
      })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  },
  //busca os usuarios
  getUser: async (req, res) => {
    try {
      //verifica no mongo se tem algum usuario com o id passado caso positivo quarda os dados completos na variavel - retornando sem o password
      const user = await Users.findById(req.user.id).select('-password')
      if (!user) return res.status(400).json({ msg: 'usuario nao existe' })

      res.json(user)
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
}

module.exports = userCtrl
