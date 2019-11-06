module.exports = function (controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  const { cartValue, cartPositions, reducer } = require('../bot');

  bby.products('categoryPath.id=cat02001',{show:`name,salePrice,image`}).then(function(data){

    controller.hears('Music', 'message', function(bot, message) {
      for (let i=0; i<10; i++) {
        var attachment = {
          type:'template',
          payload: {
            template_type:'generic',
            elements: [
              {
                title: data.products[i].name,
                image_url: data.products[i].image,
                subtitle: data.products[i].salePrice + '$',
                buttons: [
                  {
                    type:'postback',
                    title:'Add to cart',
                    payload:`music-add-to-cart${[i]}`
                  }
                ]
              },
            ]
          }
        };

        bot.reply(message, {
         quick_replies: [
           {
             title:'Main menu',
             payload:'main-menu'
           }
          ],
         attachment: attachment
        });
      };
    });

    controller.hears(['music-add-to-cart0',
    'music-add-to-cart1',
    'music-add-to-cart2',
    'music-add-to-cart3',
    'music-add-to-cart4',
    'music-add-to-cart5',
    'music-add-to-cart6',
    'music-add-to-cart7',
    'music-add-to-cart8',
    'music-add-to-cart9'], 'facebook_postback', async (bot, message) => {

      switch(message.postback.payload) {
        case 'music-add-to-cart0':
        cartValue.push(data.products[0].salePrice);
        cartPositions.push(data.products[0].name);
        break;
        case 'music-add-to-cart1':
        cartValue.push(data.products[1].salePrice);
        cartPositions.push(data.products[1].name);
        break;
        case 'music-add-to-cart2':
        cartValue.push(data.products[2].salePrice);
        cartPositions.push(data.products[2].name);
        break;
        case 'music-add-to-cart3':
        cartValue.push(data.products[3].salePrice);
        cartPositions.push(data.products[3].name);
        break;
        case 'music-add-to-cart4':
        cartValue.push(data.products[4].salePrice);
        cartPositions.push(data.products[4].name);
        break;
        case 'music-add-to-cart5':
        cartValue.push(data.products[5].salePrice);
        cartPositions.push(data.products[5].name);
        break;
        case 'music-add-to-cart6':
        cartValue.push(data.products[6].salePrice);
        cartPositions.push(data.products[6].name);
        break;
        case 'music-add-to-cart7':
        cartValue.push(data.products[7].salePrice);
        cartPositions.push(data.products[7].name);
        break;
        case 'music-add-to-cart8':
        cartValue.push(data.products[8].salePrice);
        cartPositions.push(data.products[8].name);
        break;
        case 'music-add-to-cart9':
        cartValue.push(data.products[9].salePrice);
        cartPositions.push(data.products[9].name);
        break;
      };

      await bot.reply(message, {
        text:'You added item to cart',
        quick_replies: [
          {
            title:'Main menu',
            payload:'main-menu'
          },
          {
            title:'View cart',
            payload:'view-cart'
          },
          {
            title:'Checkout',
            payload:'checkout'
          }
        ]
      });
    });
  });
}
