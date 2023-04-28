const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
// ty dalej tu jesteś?

module.exports = {
    name: "dick",
    run: async (msg, args, client) => {
        const procentyship = Math.floor(Math.random() * 30) + 1;
        const embed2 = new MessageEmbed()
        .setColor("#c714db")
        .setAuthor("🍆 ¯\_(ツ)_/¯")
        .setDescription(`> Twój penis mierzy **${procentyship}cm**`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        msg.inlineReply(embed2)

    }
}