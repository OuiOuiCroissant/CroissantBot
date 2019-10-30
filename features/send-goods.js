

module.exports = function(controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  bby.products(8880044,{show:`name,salePrice,image`}).then(function(data){

  controller.hears('Yo', 'message', function(bot, message) {

        var _name = data.name;
        var _image = data.name;
        var _price = data.salePrice;
        var attachment = {
          title:'Avaliable goods',
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title: _name,
                image_url: _image ,
                subtitle: _price,
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
