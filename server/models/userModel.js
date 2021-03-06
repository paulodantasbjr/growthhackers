const mongoose = require('mongoose')

//collections que eh salvo no mongodb
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: {
      type: Array,
      default: [],
    },
  },
  {
    //criado em ...
    //alterado em ...
    timestamps: true,
  }
)

//funcao model espera o parametro 1 - nome da colection / 2 - o que sera salvo na colections
module.exports = mongoose.model('User', userSchema)
