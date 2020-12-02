const mongoose = require('mongoose');
const User = mongoose.model('User');
const Company = mongoose.model("Company");


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createUserToken = (UserId) => {
  return jwt.sign({
    id: UserId
  }, 'laricaocolaaqui');
};

module.exports = {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      user.Password = undefined;
      return res.status(201).json({
        user,
        token: createUserToken(user._id),
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
      User.findOne({ Email: email }, (err, user) => {
        if (err) return res.status(400).json({ err });
        if (!user) return res.status(400).json({ erro: 'Invalid login' });

        bcrypt.compare(password, user.Password, (err, same) => {

          if (!same) return res.status(401).json({ erro: 'Invalid login' });

          user.Password = undefined;
          return res.status(200).json({
            user,
            token: createUserToken(user._id),
          });
        });
      }).select('+Password');
    } catch (err) {
      return res.status(400).json({ erro: err });
    }
  },
  async uploadImage(req, res) {
    try {
      const user = await User.updateOne({ _id: res.locals.auth_data.id },
        { $set: { UrlPhoto: `files/${req.files[0].filename}` } });

      return res.status(200).json({
        user
      });
    }
    catch (err) {
      return res.status(400).json({
        erro: err
      })
    }
  },
  async list(req, res) {
    try {
      const users = await User.find({});
      return res.status(200).json({
        users
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async listFavorites(req, res) {//refazer
    console.log(' res.locals.auth_data.id :', res.locals.auth_data.id);
    try {
      const userFavorites = await User.find({ _id: res.locals.auth_data.id }).select("Favorites");

      //const company = await Company.find({ _id: { $in: userFavorites[0].Favorites } });

      return res.status(200).json({
        userFavorites
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async editFavorites(req, res) {
    try {

      const user = await User.updateOne({ _id: res.locals.auth_data.id },
        { $push: { Favorites: req.body.Favorites } }
      );

      return res.status(200).json({
        user
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async search(req, res) {

    try {
      const companies = await Company.find({ Name: { "$regex": `${req.body.Name}`, "$options": "i" } });
      return res.status(200).json({
        companies
      });
    }
    catch (err) {
      return res.status(400).json({
        erro: err
      })
    }
  },
  async listRequests(req, res) {
    try {

      const users = await User.find({ _id: req.body.id });
      return res.status(200).json({
        users
      });

    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async edit(req, res) {
    console.log('Edit:', req.body);
    try {

      const user = await User.updateOne({ _id: req.body.id },
        {
          $set:
          {
            Name: req.body.Name,
            PhoneNumber: req.body.PhoneNumber,
            State: req.body.State,
            City: req.body.City,
            Neighborhood: req.body.Neighborhood,
            Number: req.body.Number
          }
        }
      );
      console.log(user);

      return res.status(200).json({
        user
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
};

