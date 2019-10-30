

module.exports = function(controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  bby.products(8880044,{show:`name,salePrice,image`}).then(function(data){
    var _name = data.name;
    var _image = data.image;
    var _price = data.salePrice;

  controller.hears('Yo', 'message', function(bot, message) {

        var attachment = {
          text:'Avaliable goods',
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
                    title:'Add to cart',
                    payload:'add-to-cart'
                  },
                  {
                    type:'postback',
                    title:'More information',
                    payload:'more-information'
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
