const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');
const search = bby.products('upc=' + process.argv[2]);

search.then(processData);


module.exports = function(controller) {

  function processData (data) {
    var product = data.products[0];

  controller.hears('Yo', 'message', function(bot, message) {


        var attachment = {
          title:'Avaliable goods',
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title:` ${product.name }`,
                image_url:` ${product.image }`,
                subtitle:` ${product.salePrice }$`,
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
  };
}
