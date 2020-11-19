const mongoose = require('mongoose');
const Food = mongoose.model('Food');


module.exports = {
  async store(req, res) {
    try {
      const companyId = res.locals.auth_data.id;
      req.body.Company = companyId;
      console.log("body:", req.body);
      const food = await Food.create(req.body);
      console.log(food);
      return res.status(201).json({
        food
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async list(req, res) {
    try {
      const foods = await Food.find({}).populate('Company');

      return res.status(201).json({
        foods
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async uploadImage(req, res) {
    try {
      const food = await Food.updateOne({ _id: res.locals.auth_data.id },
        { $set: { UrlPhoto: `files/${req.files[0].filename}` } });

      return res.status(200).json({
        food
      });
    }
    catch (err) {
      return res.status(400).json({
        erro: err
      })
    }
  }
};