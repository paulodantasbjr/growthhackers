const router = require('express').Router()

const productHouseCtrl = require('../controllers/productHouseCtrl')

/*
 ** Setando os metodos (GET,POST,DELETE,PUT, etc...) de cada rota
 ** ex: rota '/products' existem para essa rota as chamadas - GET e POST.
 */

router.post('/create/house', productHouseCtrl.createProducts)
router.get('/houses', productHouseCtrl.getProducts)

module.exports = router
