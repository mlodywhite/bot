const { MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "notstonks",
    run: async (msg, args, client) => {
        const user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
         let img = await new DIG.NotStonk().getImage(avatar);
         let attach = new MessageAttachment(img, "putin.png");
         msg.channel.send(attach)
                

    }
}