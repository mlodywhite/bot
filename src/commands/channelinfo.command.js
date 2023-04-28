const { MessageEmbed, VoiceBroadcast } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "channelinfo",
    category: "Bot",
    run: async (msg, args, client) => {
        const channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[0]) || msg.channel 
        const typechannel = {
            dm: 'PV',
            text: 'Kanał Tekstowy',
            voice: 'Kanał Głosowy',
            news: 'Kanał Ogłoszeń',
            unkown: 'Nie można określić',
        }
        const Embed = new MessageEmbed()
        .setTitle("Channel Info")
        .setColor("RED")
        .addField('Nazwa Kanału', `<#`+channel.id+`>`)
        .addField('ID Kanału', channel.id)
        .addField('Typ Kanału', typechannel[channel.type])
        .addField('Temat Kanału', channel.topic || "Kanał nie ma tematu")
        .addField('Data stworzenia', channel.createdAt.toLocaleDateString("pl-eu"))
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}