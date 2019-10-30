module.exports = function(controller) {

  controller.hears('test', 'message', function(bot, message) {

    var attachment = {
        type:'template',
        payload:{
            template_type:'generic',
            elements:[
                {
                    title:'Chocolate Cookie',
                    image_url:'https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg',
                    subtitle:'A delicious chocolate cookie',
                    buttons:[
                        {
                        type:'postback',
                        title:'Eat Cookie',
                        payload:'chocolate'
                        }
                    ]
                },
            ]
        }
    };

    bot.reply(message, {
        attachment: attachment,
    });

});

controller.on('facebook_postback', function(bot, message) {

    if (message.payload == 'chocolate') {
        bot.reply(message, 'You ate the chocolate cookie!')
    }

});

}
