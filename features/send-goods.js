module.exports = function(controller) {

  controller.hears('Yo', 'message', async(bot, message) => {

    await bot.reply(message,{
      type: 'file',
      payload:{
        url:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8880/8880044_so.jpg',
        is_reusable: false,
        title:'Batman',
        subtitle:'5,99$',
        buttons:[
          {
          title:'View details',
          payload:'view-details'
        },
        {
          title:'Shop now',
          payload:'shop-now'
        }
        ]
      }
    });
  });
}
