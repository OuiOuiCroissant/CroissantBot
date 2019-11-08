module.exports = function createUser(senderId) {
  const mongoose = require('mongoose');
  const user_schema = require('./user_schema.js');

  let MongoURI = 'mongodb+srv://customer:chatbots@cluster0-qgrmy.mongodb.net/botvlasenko?retryWrites=true&w=majority'

  const User = mongoose.model('User', user_schema, 'Users');

  mongoose.connect(MongoURI, { useNewUrlParser: true });

  User.create({ fbId: senderId }, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
}
