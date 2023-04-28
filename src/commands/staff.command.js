
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;

module.exports = {
    name: "staff",
    aliases: ["help", "helpme"],
    category: "Bot",
    run: async (msg, args, client) => {
      
        const Embed = new MessageEmbed()
        .setTitle("Staff")
        .setColor("RED")
        .addField(`Developer & Owner`, '> deloskiyt#1337')
        .addField(`Developer`, '> deloskiyt#1337')
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}// rip