
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "avatar",
    category: "Bot",
    run: async (msg, args, client) => {
        const user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author
        const Embed = new MessageEmbed()
        .setTitle("Avatar")
        .setColor("RED")
        .setImage(user.displayAvatarURL({dynamic: true, size: 4096}))
        .setDescription(`[GIF](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif) | [PNG](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png) | [JPG](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg)`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}