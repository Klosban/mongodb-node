const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.post('/delete/:id', ProductController.deleteProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)
router.get('/:id', ProductController.showProduct)
router.get('/', ProductController.showProducts)

module.exports = router