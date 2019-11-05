module.exports = function (controller) {
  const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

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
    });

      controller.hears(async(message) => { return (message.attachment.payload.elements[0].buttons[0].payload=='movie-add-to-cart4')}, 'message', async (bot, message) => {


        console.log(cartValue,cartPositions);

        await bot.reply(messege, {
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
}
