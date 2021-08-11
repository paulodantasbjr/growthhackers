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
      const { email, password } = req.body

      const user = await Users.findOne({ email })
      if (!user) return res.status(400).json({ err: 'Usuário não existe.' })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ err: 'Senha incorreta.' })

      const access_token = createAccessToken({ id: user._id })
      const refresh_token = createRefreshToken({ id: user._id })

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
  //verifica token
  refreshToken: async (req, res) => {
    try {
      const rf_token = req.headers.token
      if (!rf_token) return res.status(400).json({ err: 'Por favor logue!' })

      const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
      if (!result)
        return res
          .status(400)
          .json({ err: 'Seu token esta expirado ou incorreto.' })

      const user = await Users.findById(result.id)
      if (!user) return res.status(400).json({ err: 'Usuário não existe.' })

      const access_token = createAccessToken({ id: user._id })
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
}

module.exports = userCtrl
