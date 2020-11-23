const mongoose = require("mongoose");
const Food = mongoose.model("Food");

module.exports = {
  async store(req, res) {
    try {
      const companyId = res.locals.auth_data.id;
      req.body.Company = companyId;

      const food = await Food.create(req.body);
      return res.status(201).json({
        food,
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async list(req, res) {
    try {
      const foods = await Food.find({}).populate("Company");

      return res.status(201).json({
        foods,
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async listByCategory(req, res) {
    try {
      const foods = await Food.find({ Category: req.body.Category }).sort({
        Category: -1,
      });

      return res.status(200).json({
        foods,
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async uploadImage(req, res) {

    try {
      const food = await Food.updateOne({ _id: req.body.id },
        { $set: { UrlPhoto: `files/${req.body.url}` } }
      );
      // const food = await Food.updateOne({ _id: req.body.id },
      //   { $set: { UrlPhoto: `files/${req.files[0].filename}` } } 
      // );
      return res.status(200).json({
        food
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
};
