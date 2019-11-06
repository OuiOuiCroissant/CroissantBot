module.exports = function(controller) {
  const { cartValue, cartPositions, reducer } = require('../bot');

  controller.hears('Checkout','message', async(bot,message) => {

    await bot.reply(message, {
      text:`Your bill is total: ${cartValue}`,
      quick_replies: [
        {
          title:'Pay',
          payload:'pay'
        }
      ]
    });
  });

  controller.hears('Pay','message', async(bot,message) =>{

    cartValue = [0];

    await bot.reply(message, {
     quick_replies: [
       {
         title: "Main menu",
         payload: "main-menu"
       }
      ],
     attachment: attachment
    });
  });
}
