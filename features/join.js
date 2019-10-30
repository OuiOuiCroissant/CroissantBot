module.exports = function(controller) {

  controller.on('channel_join', async(bot, message) => {
    await bot.reply(message,'Welcome to my first bot!');
  });

}
