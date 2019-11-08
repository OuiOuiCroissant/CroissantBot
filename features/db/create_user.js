module.exports = function createUser(senderId) {
  const mongoose = require('mongoose');
  const user_schema = require('./user_schema.js');

  const User = mongoose.model('User', user_schema, 'Users');

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  User.findOne({ fbId: senderId }, (err, res) => {
    if (err) throw err;
    if (res === null) {
      User.create({ fbId: senderId }, (err, res) => {
        if (err) throw err;
      });
    }
  });
};
