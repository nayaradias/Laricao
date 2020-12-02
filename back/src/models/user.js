const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    Password: {
      type: String,
      required: true,
      select: false,
    },
    PhoneNumber: {
      type: Number,
      required: false,
    },
    Address: {
      State: { type: String, required: false },
      City: { type: String, required: false },
      Neighborhood: { type: String, required: false },
      Number: { type: Number, required: false }
    },
    Payment: {
      type: String,
      enum: ['money', 'picpay', 'Credit card', 'Debit card',],
      required: false,
    },
    UrlPhoto: {
      type: String,
      required: false,
    },
    Favorites: [String],
    Requests: [
      {
        Id: { type: String, required: false },
        Name: { type: String, required: false },
        Unity: { type: String, required: false },
        Price: { type: Number, required: false },
        Date: { type: Date, default: Date.now },//pode dar bo
        Status: { type: String, enum: ['Pedido entregue', 'Em andamento',], required: false },
        UrlPhoto: { type: String, required: false },
        Company: { type: String, required: false },
      }
    ],
    Bag: [
      {
        Id: { type: String, required: false },
        Name: { type: String, required: false },
        Unity: { type: String, required: false },
        Price: { type: Number, required: false },
        UrlPhoto: { type: String, required: false },
      }
    ]
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', function (next) {
  let user = this;
  if (!user.isModified('Password'))
    return next();
  bcrypt.hash(user.Password, 10, (err, bcrypt) => {
    user.Password = bcrypt;
    return next();
  });
});

mongoose.model('User', UserSchema);
