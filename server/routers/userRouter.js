const router = require('express').Router()

const userCtrl = require('../controllers/userCtrl')

/*
 ** Setando os metodos (GET,POST,DELETE,PUT, etc...) de cada rota
 ** ex: rota '/register' existe para essa rota a chamada - POST.
 */

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.get('/refresh_token', userCtrl.refreshToken)
router.post('/favorites', userCtrl.favorites)

module.exports = router
