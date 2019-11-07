module.exports = function (controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  const { cartValue, cartPositions } = require('../bot');

  bby.products('categoryPath.id=pcmcat325900050007', {show:`name,salePrice,image`}).then(function(data){

    controller.hears('Specialty gift cards', 'message', function(bot, message) {
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
                    payload:`gift-add-to-cart${[i]}`
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
      }
    });

    controller.hears(['gift-add-to-cart0',
    'gift-add-to-cart1',
    'gift-add-to-cart2',
    'gift-add-to-cart3',
    'gift-add-to-cart4',
    'gift-add-to-cart5',
    'gift-add-to-cart6',
    'gift-add-to-cart7',
    'gift-add-to-cart8',
    'gift-add-to-cart9'], 'facebook_postback', async (bot, message) => {

      switch(message.postback.payload) {
        case 'gift-add-to-cart0':
        cartValue.push(data.products[0].salePrice);
        cartPositions.push(data.products[0].name);
        break;
        case 'gift-add-to-cart1':
        cartValue.push(data.products[1].salePrice);
        cartPositions.push(data.products[1].name);
        break;
        case 'gift-add-to-cart2':
        cartValue.push(data.products[2].salePrice);
        cartPositions.push(data.products[2].name);
        break;
        case 'gift-add-to-cart3':
        cartValue.push(data.products[3].salePrice);
        cartPositions.push(data.products[3].name);
        break;
        case 'gift-add-to-cart4':
        cartValue.push(data.products[4].salePrice);
        cartPositions.push(data.products[4].name);
        break;
        case 'gift-add-to-cart5':
        cartValue.push(data.products[5].salePrice);
        cartPositions.push(data.products[5].name);
        break;
        case 'gift-add-to-cart6':
        cartValue.push(data.products[6].salePrice);
        cartPositions.push(data.products[6].name);
        break;
        case 'gift-add-to-cart7':
        cartValue.push(data.products[7].salePrice);
        cartPositions.push(data.products[7].name);
        break;
        case 'gift-add-to-cart8':
        cartValue.push(data.products[8].salePrice);
        cartPositions.push(data.products[8].name);
        break;
        case 'gift-add-to-cart9':
        cartValue.push(data.products[9].salePrice);
        cartPositions.push(data.products[9].name);
        break;
      }

      await bot.reply(message, {
        text: 'You added item to cart',
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
