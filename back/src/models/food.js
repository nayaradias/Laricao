const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: false
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
      enum: ['Burger', 'Pizza', 'Japonesa', 'churrasco', 'outros',]
    },

    UrlPhoto: {
      type: String,
      required: false,
    },
    Options: [
      {
        Name: {type: String, required:false},
        Description: {type: String,required:false}, 
        Price: {type: Number,required:false}, 
      }
    ]
  },
  {
    timestamps: true,
  }
);

mongoose.model('Food', FoodSchema);
