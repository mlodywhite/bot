const { MessageEmbed, MessageAttachment, User } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const axios = require('axios')

module.exports = {
    name: "przepowiednia",
    run: async (msg, args, client) => {
        const pytanie = args.slice(0).join(" ")
        let url = "https://api.luxbot.ml/randomize?plik=https://pastebin.com/raw/fAQpPCaC"
        if (!pytanie)
        {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie podano pytania")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (pytanie.length > 150)
        {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Pytanie jest za długie!")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        let image, repsonse;
        response = await axios.get(url)
        image = response.data;

        const Embed = new MessageEmbed()
            .setAuthor("Przepowiednia")
            .setColor("GREEN")
            .addField('Pytanie', pytanie)
            .addField('Przepowiednia', image.random)
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        return msg.inlineReply(Embed);
    }
}