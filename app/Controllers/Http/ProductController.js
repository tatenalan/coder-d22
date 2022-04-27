'use strict'
const Product = use('App/Models/Product')

class ProductController {
    async index() {
        return await Product.all()
    }

    async show({params}) {
        return await Product.find(params.id)
    }

    async store({request, response}) {
        const product = await Product.create(
            {
                title:request.input('title'),
                price:request.input('price')
            })
        return response.status(201).json(product)
    }

    async update({request, params, response}) {
        const product = await Product.findOrFail(params.id)
        product.title = request.input('title')
        product.price = request.input('price')
        product.save()
        return response.status(202).json(product)
    }

    async delete({params}) {
        const product = await User.findOrFail(params.id)
        await product.delete(params.id)
        return product
    }
}

module.exports = ProductController
