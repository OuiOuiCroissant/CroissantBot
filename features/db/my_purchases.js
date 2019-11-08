module.exports = function myPurchases(senderId, myPurchases) {
  const mongoose = require('mongoose');
  const user_schema = require('./user_schema.js');

  const User = mongoose.model('User', user_schema, 'Users');

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  User.findOneAndUpdate({ fbId: senderId }, { $push: { myPurchases } }, { new: true }, (err, res) => {
    if (err) throw err;
  });
};
