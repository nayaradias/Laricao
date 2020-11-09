const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
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

mongoose.model('Company', CompanySchema);
