module.exports = function(controller)  {

  controller.hears('Catalogue', 'message',  async(bot, message) => {

      await bot.reply(message,{
          text: 'Chose category',
          quick_replies: [
          {
            title: "BEST BUY",
            payload: "best-buy"
          },
          {
            title: "Main menu",
            payload: "main-menu"
          }
        ]
      });
  });

  controller.hears('BEST BUY', 'message',  async(bot, message) => {

      await bot.reply(message,{
          text: 'Choose category',
          quick_replies: [
          {
            title: "Movies & Music",
            payload: "movies-n-music"
          },
          {
            title: "Main menu",
            payload: "main-menu"
          }
        ]
      });
  });

  controller.hears('Movies & Music', 'message',  async(bot, message) => {

      await bot.reply(message,{
          text: 'Choose category',
          quick_replies: [
          {
            title: "Movies & TV Shows",
            payload: "movies-n-tv-shows"
          },
          {
            title:"Music",
            payload:"music"
          },
          {
            title:"Specialty gift cards",
            payload:"specialty-gift-cards"
          },
          {
            title: "Main menu",
            payload: "main-menu"
          }
        ]
      });
  });

  controller.hears(['Get referal link','Music','Specialty gift cards'], 'message',  async(bot, message) => {

      await bot.reply(message,{
          text: `Currently that don't make anything`,
          quick_replies: [
          {
            title: "Main menu",
            payload: "main-menu"
          }
        ]
      });
  });

  controller.hears('Movies & TV Shows', 'message', async(bot, message) => {

    var attachment = {
    type: "image",
    payload: {
        url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8880/8880044_so.jpg",
        is_reusable: true
    }
};

  await bot.reply(message, {
        attachment: attachment,
    });

});
}
