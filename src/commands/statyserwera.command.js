
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const db = require('quick.db')

module.exports = {
    name: "statyserwera",
    aliases: ["help", "helpme"],
    category: "Bot",
    run: async (msg, args, client) => {
        const wiadomosci = db.get(`messages_${msg.guild.id}`) || 0
        const Embed = new MessageEmbed()
            .setThumbnail(msg.guild.iconURL())
            .setTitle("Statystyki Serwera")
            .setColor("GREEN")
            .addField('Wszystkie wiadomosci na serwerze', wiadomosci)
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        return msg.inlineReply(Embed);
    }
}