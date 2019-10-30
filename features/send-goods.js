module.exports = function(controller) {

  controller.hears('Yo', 'message', async(bot, message) => {

    await bot.reply(message,{
        text:"Yo",
        imageUrl:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8880/8880044_so.jpg',
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
