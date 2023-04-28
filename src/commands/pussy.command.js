
const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;

module.exports = {
    name: "pussy",
    aliases: ["kot", "kotki"],
    category: "animals",
    run: async (msg, args, client) => {
        const url = "https://nekobot.xyz/api/image?type=pussy";

        let image, response;
            response = await axios.get(url);
            image = response.data;
        if (msg.channel.nsfw)
        {
            const embed = new MessageEmbed()
            .setTitle(`¯_(ツ)_/¯`)
            .setColor("GREEN")
            .setImage(image.message)
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.channel.send(embed);
        }
        else {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak")
            .setColor("RED")
            .setDescription("> Ten kanał nie jest NSFW")
            .setImage('https://i.imgur.com/XtZ5a8q.gif ')
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

    }
}