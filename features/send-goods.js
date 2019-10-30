module.exports = function(controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  controller.hears('Yo', 'message', async(bot, message) => {

    await bby.products(`type="${ message.quick_reply.payload }"`,{show:"image,name,salePrice"}).then(function(data){
            for(let i=0; i<5;i++)
            {
            var attachment = {
                type:'template',
                payload:{
                    template_type:'generic',
                    elements:[
                        {
                            title:` ${data.products[i].name }`,
                            image_url:` ${data.products[i].image }`,
                            subtitle:` ${data.products[i].salePrice }$`,
                            buttons:[
                                {
                                type:'postback',
                                title:'Buy',
                                payload:'buy'
                                },
                                {
                                    type:'postback',
                                    title:'Add to favorite',
                                    payload:'add-to-favorite'
                            }
                            ]
                        },
                    ]
                }
            };
            bot.reply(message, {attachment: attachment,});
          }

    });
  });
}
