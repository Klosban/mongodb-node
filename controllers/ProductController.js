const { getProducts } = require('../models/Product')
const Product = require('../models/Product')

module.exports = class ProductController {
    static async showProducts(req, res) {
        const products = await Product.find().lean()

        res.render('products/all', { products: products })
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
 
        const product = new Product({name, price, description})

        await product.save()
        res.redirect('/products')
    }

    static async showProduct(req, res) {
        const id = req.params.id

        const product = await Product.findById(id).lean()
        res.render('products/product', { product: product })
    }

    static async deleteProduct(req, res) {
        const id = req.params.id
        
        await Product.deleteOne({_id: id})

        res.redirect('/products')
    }

    static async editProduct(req, res) {
        const id = req.params.id
        const product = await Product.findById(id).lean()

        res.render('products/edit', { product: product })
    }

    static async editProductPost(req, res) {
        const id = req.body.id
        const name = req.body.name 
        const price = req.body.price
        const description = req.body.description

        const product = {name, price, description}
        
        await Product.updateOne({_id: id}, product)

        res.redirect('/products')
    }
}