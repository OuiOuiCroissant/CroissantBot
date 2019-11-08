module.exports = function addPhone(senderId, phone) {
  const mongoose = require('mongoose');
  const user_schema = require('./user_schema.js');

  const User = mongoose.model('User', user_schema, 'Users');

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  User.findOneAndUpdate({ fbId: senderId }, {phone: phone}, {new:true}, (err, res) => {
    if (err) throw err;
  });
}
