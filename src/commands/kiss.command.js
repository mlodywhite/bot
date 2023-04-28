const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "kiss",
    run: async (msg, args, client) => {
        let pepole = msg.mentions.members.first()
        let url = "https://api.luxbot.ml/kiss"
        if (!pepole)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano osoby do pocałowania! Nie możesz siebie całować to troche dziwne :/")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (pepole.id == msg.author.id)
        {
            msg.inlineReply('Czemu chcesz siebie pocałować? To troche dziwne..')
        }
        else {
            let image, repsonse;
                response = await axios.get(url)
                image = response.data;
            
                const Embed = new MessageEmbed()
                .setAuthor("💋 Kiss")
                .setColor("GREEN")
                .setImage(image.kiss)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
        }

    }
}