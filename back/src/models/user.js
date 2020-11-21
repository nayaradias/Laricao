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
      type: String,
      required: false,
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
    Favorites: [String]
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
