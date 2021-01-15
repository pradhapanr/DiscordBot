const Discord = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'Creates a yes or poll that users can react to!',
    execute(message, args, client) {
        let pollDescription = args.join(' ')
        const Embed = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle('Poll Initiated!')
        .setDescription(pollDescription);

        message.channel.send(Embed).then(messageReaction => {
            messageReaction.react("✅");
            messageReaction.react("❌");
        });
    }
}