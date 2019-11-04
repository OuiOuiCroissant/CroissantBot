module.exports = function(controller) {

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
