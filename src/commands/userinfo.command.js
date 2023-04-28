const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "userinfo",
    category: "Bot",
    run: async (msg, args, client) => {
        const user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author

        const statuss = {
            online: 'Aktywny',
            dnd: 'Nie przeszkadzać',
            idle: 'Zaraz wracam',
            offline: 'Niedostępny'
        }
        const Embed = new MessageEmbed()
        .setTitle("User Info")
        .setColor("RED")
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .addField('Nazwa Użytkownika', user.username)
        .addField('Hasztag', `#${user.discriminator}`)
        .addField('ID Użytkownika', user.id)
        .addField('Status Użytkownika', statuss[user.presence.status])
        .addField('Konto stworzono', user.createdAt.toLocaleDateString("pl-eu"))
        .addField('Avatar Użytkownika', `[GIF](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif) | [PNG](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png) | [JPG](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg)`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}