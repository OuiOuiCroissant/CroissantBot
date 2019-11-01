module.exports = function(controller) {

  controller.on('facebook_optin', function(bot, message) {
    bot.reply(message, 'Welcome to my first facebook messenger bot');
  });

}
