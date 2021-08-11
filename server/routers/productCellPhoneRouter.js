const router = require('express').Router()
const productCellPhoneCtrl = require('../controllers/productCellPhoneCtrl')

/*
 ** Setando os metodos (GET,POST,DELETE,PUT, etc...) de cada rota
 ** ex: rota '/products' existem para essa rota as chamadas - GET e POST.
 */

router.post('/create/cellphone', productCellPhoneCtrl.createProducts)
router.get('/cellphones', productCellPhoneCtrl.getProducts)

module.exports = router
