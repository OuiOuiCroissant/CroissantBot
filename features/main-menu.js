module.exports = function(controller) {

    controller.hears('Get Started', 'message',  async(bot, message) => {
      var persistent_menu = {
        locale:"default",
        composer_input_disabled:true,
        call_to_actions:[
            {
                title:"Persistent menu",
                type:"nested",
                call_to_actions:[
                    {
                        title:"Main menu",
                        type:"postback",
                        payload:"main-menu"
                    },
                    {
                        title:"Catalogue",
                        type:"postback",
                        payload:"catalogue"
                    }
                ]
            },
            {
                title:"My Purchases",
                type:"postback",
                payload:"my-purchases"
            }
        ]
      }
      console.log(persistent_menu);
        await bot.reply(message,{
            text: 'Lets start',
            /*quick_replies: [
            {
              title: "Main menu",
              payload: "main-menu"
            }
          ]*/
          persistent_menu
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
