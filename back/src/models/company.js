const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const CompanySchema = new mongoose.Schema(
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
    Evaluation: {
      type: Number,
      required:false
    },
    PhoneNumber: {
      type: Number,
      required: false,
    },
    Address: {
      type: String,
      required: false,
    },
    WorkHoursStart: {
      type: String,
      required: false,
    },
    WorkHoursEnd: {
      type: String,
      required: false,
    },
    Status: {
      type: String,
      enum:['Aberto', 'Fechado',],
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
CompanySchema.pre('save', function (next) {
  let company = this;
  if (!company.isModified('Password'))
      return next();
  bcrypt.hash(company.Password, 10, (err, bcrypt) => {
    company.Password = bcrypt;
      return next();
  });
});
mongoose.model('Company', CompanySchema);
