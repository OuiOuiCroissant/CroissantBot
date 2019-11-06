module.exports = function(controller) {
  const { cartValue, cartPositions, reducer } = require('../bot');

  controller.hears('Checkout', 'message', async(bot,message) => {

    await bot.reply(message, {
      text:`Your bill is total: ${cartValue.reduce(reducer)}`,
      quick_replies: [
        {
          title:'Pay',
          payload:'pay'
        }
      ]
    });
  });

  controller.hears('Pay', 'message', async(bot,message) =>{

    cartValue.length = 0;
    cartPositions.length = 0;

    await bot.reply(message, {
      text:'You have successfuly ordered'
      quick_replies: [
        {
          title:'Main menu',
          payload:'main-menu'
        }
      ]
    });
  });
}
