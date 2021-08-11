const ProductTravel = require('../models/productTravelModel')

class APIfeatures {
  //classe recebe 2 parametros query = ProductCar.find() / queryString = req.query
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  //filtro da caixa de texto
  filtering() {
    const queryObj = { ...this.queryString }

    const excludedFields = ['page', 'sort', 'limit']
    excludedFields.forEach((el) => delete queryObj[el])

    //    gte = maior ou igual
    //    lte = menor ou igual
    //    lt = menor que
    //    gt = maior que
    //    regex = query de letra
    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => '$' + match
    )
    this.query.find(JSON.parse(queryStr))

    return this
  }

  //filtro
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sortBy)
    } else {
      this.query = this.query.sort('-createdAt')
    }
    return this
  }

  //paginacao
  paginating() {
    const page = this.queryString.page * 1 || 1
    const limit = this.queryString.limit * 1 || 20
    const skip = (page - 1) * limit
    this.query = this.query.skip(skip).limit(limit)

    return this
  }
}

const productTravelCtrl = {
  //busca
  getProducts: async (req, res) => {
    try {
      const features = new APIfeatures(ProductTravel.find(), req.query)
        .filtering()
        .sorting()
        .paginating()

      const productsTravel = await features.query

      res.json({
        status: 'success',
        result: productsTravel.length,
        productsTravel,
      })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  },
  //cria o produto
  createProducts: async (req, res) => {
    try {
      const { title, description, image, category, checked } = req.body

      if (!title || !description || !image || !category)
        return res.status(400).json({ err: 'Preencha todos os campos.' })

      const newTravelProduct = new ProductTravel({
        title: title.toLowerCase(),
        description,
        image,
        category,
        checked,
      })

      await newTravelProduct.save()

      res.json({ msg: 'Sucesso! Criado nova viagem' })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  },
}

module.exports = productTravelCtrl
