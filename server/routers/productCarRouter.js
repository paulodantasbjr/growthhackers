const router = require('express').Router()
const productCarCtrl = require('../controllers/productCarCtrl')

/*
 ** Setando os metodos (GET,POST,DELETE,PUT, etc...) de cada rota
 ** ex: rota '/products' existem para essa rota as chamadas - GET e POST.
 */

router.post('/create/car', productCarCtrl.createProducts)
router.get('/cars', productCarCtrl.getProducts)

module.exports = router
