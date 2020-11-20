const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required:false
    },
    Price: {
      type: Number,
      required: false,
    },
    Company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    Category: {
      type: String,
      required: false,
      default:'Outros'
    },

    UrlPhoto: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model('Food', FoodSchema);
