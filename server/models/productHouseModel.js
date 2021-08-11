const mongoose = require('mongoose')

//colections que eh salvo no mongodb
const productHouseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  {
    //criado em ...
    //alterado em ...
    timestamps: true,
  }
)

//funcao model espera o parametro 1 - nome da colection / 2 - o que sera salvo na colections
module.exports = mongoose.model('HouseProducts', productHouseSchema)
