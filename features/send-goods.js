

module.exports = function(controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  bby.products(8880044,{show:`name,salePrice,image`}).then(function(data){

  controller.hears('Yo', 'message', function(bot, message) {


        var attachment = {
          title:'Avaliable goods',
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title:` ${data.name }`,
                image_url:` ${data.image }`,
                subtitle:` ${data.salePrice }$`,
                buttons:[
                  {
                    type:'postback',
                    title:'Buy',
                    payload:'buy'
                  }
                ]
              },
            ]
          }
        };

       bot.reply(message, {attachment: attachment,});
     });
     });
}
