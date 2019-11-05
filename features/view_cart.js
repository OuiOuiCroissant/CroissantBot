module.exports = function(controller) {

  const { cartValue, cartPositions, reducer } = require('/bot.js');

  controller.hears('View cart','message', async(bot, message) => {

    await bot.reply(message,{
      text: `Your cart total cost: ${cartValue.reduce(reducer)}$! It contains: ${cartPositions}`,
      quick_replies: [
        {
          title:'Checkout',
          payload:'checkout'
        },
        {
          title: "Main menu",
          payload: "main-menu"
        }
      ]
    });
  });
}
