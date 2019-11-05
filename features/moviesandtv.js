module.exports = function (controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

  const { cartValue, cartPositions, reducer } = require('../bot');

  bby.products('categoryPath.id=cat02015',{show:`name,salePrice,image`}).then(function(data){

    /*var cartArray = [];
    for (let i=0; i<10; i++) {
      var attachment = {
        type:'template',
        payload:{
          template_type:'generic',
          elements:[
            {
              title: data.products[i].name,
              image_url: data.products[i].image,
              subtitle: data.products[i].salePrice + '$',
              buttons:[
                {
                  type:'postback',
                  title:'Add to cart',
                  payload:`add-to-cart${[i]}`
                }
              ]
            }
          ]
        }
      };
      cartArray.push(attachment.payload.elements[0].buttons[0].payload)
    }
    console.log(cartArray);
    console.log(data.products[3].salePrice);
    */
    controller.hears('Movies & TV Shows', 'message', function(bot, message) {
      for (let i=0; i<10; i++) {
        var attachment = {
          type:'template',
          payload:{
            template_type:'generic',
            elements:[
              {
                title: data.products[i].name,
                image_url: data.products[i].image,
                subtitle: data.products[i].salePrice + '$',
                buttons:[
                  {
                    type:'postback',
                    title:'Add to cart',
                    payload:`movie-add-to-cart${[i]}`
                  }
                ]
              },
            ]
          }
        };

        bot.reply(message, {
         quick_replies: [
           {
             title: "Main menu",
             payload: "main-menu"
           }
          ],
         attachment: attachment
        });
      };


      controller.hears([`movie-add-to-cart${i}`], 'facebook_postback', async (bot, message) => {

        switch(message.attachment.payload.elements[0].buttons[0].payload){
          case 'music-add-to-cart0':
          cartValue.push(data.products[0].salePrice);
          cartPositions.push(data.products[0].name);
          case 'music-add-to-cart1':
          cartValue.push(data.products[1].salePrice);
          cartPositions.push(data.products[1].name);
          case 'music-add-to-cart2':
          cartValue.push(data.products[2].salePrice);
          cartPositions.push(data.products[2].name);
          case 'music-add-to-cart3':
          cartValue.push(data.products[3].salePrice);
          cartPositions.push(data.products[3].name);
          case 'music-add-to-cart4':
          cartValue.push(data.products[4].salePrice);
          cartPositions.push(data.products[4].name);
          case 'music-add-to-cart5':
          cartValue.push(data.products[5].salePrice);
          cartPositions.push(data.products[5].name);
          case 'music-add-to-cart6':
          cartValue.push(data.products[6].salePrice);
          cartPositions.push(data.products[6].name);
          case 'music-add-to-cart7':
          cartValue.push(data.products[7].salePrice);
          cartPositions.push(data.products[7].name);
          case 'music-add-to-cart8':
          cartValue.push(data.products[8].salePrice);
          cartPositions.push(data.products[8].name);
          case 'music-add-to-cart9':
          cartValue.push(data.products[9].salePrice);
          cartPositions.push(data.products[9].name);
        };

        console.log(movieCartValue,movieCartPositions);

        await bot.reply(message, {
          text: 'You added item to cart',
          quick_replies: [
            {
              title: "Main menu",
              payload: "main-menu"
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
  });
}
