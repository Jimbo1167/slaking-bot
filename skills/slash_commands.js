const parseRaidCmd = (text) => {
    const params = text.split(',');
    if (params.length >= 3) {
        const firstParam = Number.parseInt(params[0]);
        let raidInfo;
        if (Number.isInteger(firstParam)) {
            raidInfo = Object.assign({}, { level : firstParam });
        } else {
            raidInfo = Object.assign({}, { pokemon: firstParam });
        }

        return Object.assign(raidInfo, {
            location: params[1],
            timer: params[2],
            success: true
        });
    } else {
        return { success: false };
    }
};


module.exports = function(controller) {
    controller.on('slash_command', function (bot, message) {
        console.log('working on direct_message');
        console.log(`message ${JSON.stringify(message)}`);
        switch(message.command) {
            case '/ping':
                bot.replyPrivate(message, 'PONG!');
                break;
            case '/raid':
                // get raid breakdown
                const breakdown = parseRaidCmd(message.text);


                if (breakdown && breakdown.success) {
                    // create channel with name
                    // set message on counter ?
                    // do other raid stuff
                    bot.replyPublic(message, `breakdown: ${JSON.stringify(breakdown)}`)
                } else {
                    bot.replyPrivate(message, "usage: /raid [star|pokemon], [location], [time left on timer]");
                }

                // bot.replyPrivate(message, 'stuff');
                break;
            default:
                bot.replyPrivate(message, 'Command ' + message.command + ' not supported yet!');

        }
    });

    controller.on('ping', (bot, message) => {
        console.log('working on ping');
        console.log(`message ${message}`);
        bot.reply(message,'Received');
    });
};
