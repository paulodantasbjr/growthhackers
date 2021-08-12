const router = require('express').Router()

const productTravelCtrl = require('../controllers/productTravelCtrl')

/*
 ** Setando os metodos (GET,POST,DELETE,PUT, etc...) de cada rota
 ** ex: rota '/products' existem para essa rota as chamadas - GET e POST.
 */

router.post('/create/travel', productTravelCtrl.createProducts)
router.get('/travels', productTravelCtrl.getProducts)

module.exports = router
