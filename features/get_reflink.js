module.exports = function (controller) {
  const createUser = require('./db/create_user.js');

  controller.hears('Get referal link', 'message', async (bot, message) => {
    createUser(message.sender.id);
    await bot.reply(message, {
      text: `https://m.me/BotVlasenko?ref=${message.sender.id}`,
      quick_replies: [
        {
          title: 'Main menu',
          payload: 'main-menu',
        },
      ],
    });
  });
}
