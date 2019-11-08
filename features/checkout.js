module.exports = function (controller) {
  const createUser = require('./db/create_user.js');
  const addPhone = require('./db/add_phone.js');
  const addAdress = require('./db/add_adress.js');
  const { cartValue, cartPositions, reducer } = require('../bot');

  controller.hears('Checkout', 'message', async (bot, message) => {
    await bot.reply(message, {
      text: `Your bill is total: ${cartValue.reduce(reducer)} \n Few steps left for make an order`,
      quick_replies: [
        {
          title: 'Continue',
          payload: 'continue'
        },
      ],
    });
  });

  controller.hears('Continue', 'message', async (bot, message) => {
    createUser(message.sender.id);
    await bot.reply(message, {
      text: 'Your phone number in format +XXXXXXXXXXXX'
    });
  });

  controller.hears(async(message) => { return message.text.substring(0,1) == '+'}, 'message', async(bot, message) => {
    addPhone(message.sender.id, message.text);
    await bot.reply(message, {
      text: 'Your adress in format ~YOUR_ADRESS'
    });
  });

  controller.hears(async(message) => { return message.text.substring(0,1) == '~'}, 'message', async(bot, message) => {
    addAdress(message.sender.id, message.text);
    await bot.reply(message, {
      text: 'Confirm your order',
      quick_replies: [
        {
          title: 'Confirm',
          payload: 'confirm',
        }
      ]
    });
  });

  controller.hears('Confirm', 'message', async (bot, message) => {
    myPurchases(message.sender.id, cartPositions);
    cartValue.length = 0;
    cartPositions.length = 0;

    await bot.reply(message, {
      text: 'You have successfuly ordered',
      quick_replies: [
        {
          title: 'Main menu',
          payload: 'main-menu',
        }
      ]
    });
  });
};
