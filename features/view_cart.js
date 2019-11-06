module.exports = function(controller) {

  const { cartValue, cartPositions, reducer } = require('../bot');

  controller.hears('View cart', 'message', async(bot, message) => {

    if (cartValue.length==0) {
      await bot.reply(message, {
        quick_replies: [
          {
            title:'Checkout',
            payload:'checkout'
          },
          {
            title:'Main menu',
            payload:'main-menu'
          }
        ]
      });
    } else {
      await bot.reply(message, {
        text:`Your cart total cost: ${cartValue.reduce(reducer)}$! It contains: ${cartPositions}`,
        quick_replies: [
          {
            title:'Checkout',
            payload:'checkout'
          },
          {
            title:'Main menu',
            payload:'main-menu'
          }
        ]
      });
    }
  });
}
