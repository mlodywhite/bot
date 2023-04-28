const { MessageEmbed, MessageAttachment, User } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const axios = require('axios')

module.exports = {
    name: "zawod",
    run: async (msg, args, client) => {
        let url = "https://api.luxbot.ml/randomize?plik=https://pastebin.com/raw/KnRYreBh"

        let image, repsonse;
        response = await axios.get(url)
        image = response.data;

        if (msg.author.id === "572677844023640084")
        {

            const Embed = new MessageEmbed()
                .setAuthor("Zawód")
                .setColor("GREEN")
                .setDescription(`W przyszłości **Dilerem** \n \n Neko bierze za 1kg 10 zł dm`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        else {
            const Embed = new MessageEmbed()
                .setAuthor("Zawód")
                .setColor("GREEN")
                .setDescription(`W przyszłości **`+image.random+`**`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
    }
}