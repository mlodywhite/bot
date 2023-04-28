const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "ping",
    category: "Bot",
    run: async (msg, args, client) => {

        const Embed = new MessageEmbed()
        .setTitle("Ping bota")
        .setThumbnail("https://i.imgur.com/0Jzkyvj.png")
        .setColor("RED")
        .setDescription(`Ping ShieldBota wynosi: **${Date.now() - msg.createdTimestamp}ms.** \n\n> *Jeżeli ping przekracza 300ms niezwłocznie powiadom administracje komendą zglos*`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}