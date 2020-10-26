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
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Payment: {
      type: String, //(money, picpay)
      required: false,
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

// UserSchema.path('Email').validate((val) => {
//   emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return emailRegex.test(val);
// }, "E-mail inválido.");

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
