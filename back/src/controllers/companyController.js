const mongoose = require("mongoose");
const Company = mongoose.model("Company");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createCompanyToken = (CompanyId) => {
  return jwt.sign({
    id: CompanyId
  }, 'laricaocolaaqui');
};

module.exports = {
  async store(req, res) {
    try {
      const company = await Company.create(req.body);
      company.Password = undefined;
      return res.status(201).json({ 
        company,
        token: createCompanyToken(company._id),
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async list(req, res) {
    try {
      const companies = await Company.find({});
      return res.status(200).json({
        companies
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async listFavorites(req, res) {
    try {
      const companies = await Company.find({}).limit(10).sort({createdAt:1});
      return res.status(200).json({
        companies
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: 'insufficient data',
      });
    }
    try {
      Company.findOne({ Email: email }, (err, company) => {
        if (err) return res.status(400).json({ err });
        if (!company) return res.status(400).json({ erro: 'Invalid login' });

        bcrypt.compare(password, company.Password, (err, same) => {

          if (!same) return res.status(401).json({ erro: 'Invalid login' });

          company.Password = undefined;
          return res.status(200).json({
            company,
            token: createCompanyToken(company._id),
          });
        });
      }).select('+Password');
    } catch (err) {
      return res.status(400).json({ erro: err });
    }
  },
  async uploadImage(req, res) {
    try {
      const company = await Company.updateOne({ _id: res.locals.auth_data.id },
        { $set: { UrlPhoto: `files/${req.files[0].filename}` } });

      return res.status(200).json({
        company
      });
    }
    catch (err) {
      return res.status(400).json({
        erro: err
      })
    }
  }
};