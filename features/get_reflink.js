module.exports = function (controller) {

  controller.hears('Get referal link', 'message', async (bot, message) => {
    await bot.reply(message, {
      text: `Your referral link: https://m.me/BotVlasenko?ref=${message.sender.id}`,
      quick_replies: [
        {
          title: 'Main menu',
          payload: 'main-menu',
        },
      ],
    });
  });
}
