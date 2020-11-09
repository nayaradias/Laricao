const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const { Store } = require('tough-cookie');
const createUserToken = (UserId) => {
  return jwt.sign({
    id: UserId
  }, 'laricaocolaqui');
};

module.exports = {
  async store(req, res) {
    console.log(req.body);
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
        { $set: { UrlFoto: `files/${req.file.filename}` } });

      return res.status(200).json({
        user
      });
    }
    catch (err) {
      return res.status(400).json({
        erro: err
      })
    }
  }
};
