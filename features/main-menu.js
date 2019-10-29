module.exports = function(controller) {

    controller.hears('Get Started', 'message',  async(bot, message) => {

        await bot.reply(message,{
            text: 'Lets start',
            quick_replies: [
            {
              title: "Main menu",
              payload: "main-menu"
            }
          ]
        });
    });

    controller.hears('Main menu', 'message', async(bot, message) => {

      await bot.reply(message,{
        text:'Chose option',
        quick_replies: [
          {
            title: "Main menu",
            payload:"main-menu"
          },
          {
            title:"Catalogue",
            payload:"catalogue"
          },
          {
            title:"Get referal link",
            payload:"get-referal-link"
          }
      ]
      });
    });
}
