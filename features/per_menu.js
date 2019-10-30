module.exports = function(controller){

  controller.hears('Get Started', 'message',  async(bot, message) => {

      await bot.reply(message,{
          text: 'Lets start',
          persistent_menu: [
            {
              call_to_actions: [
                {
                  title: "Main menu",
                  payload: "main-menu"
                },
                {
                  title: "Shop",
                  payload: "shop",
                  url:"https://api.bestbuy.com/click/-/8880044/pdp"
                }
              ]
            }
          ]
      });
  });

}
