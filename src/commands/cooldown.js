

const { MessageEmbed } = require('discord.js');
const config = require('../config');
const DiscordJS = require("discord.js");//zacznij pisać ;)
const db = require(`quick.db`)
const { botversion } = require('../config');

module.exports = {
    //name: "cooldown",
    aliases: ["staty", "statystyki"],
    category: "Bot",
    run: async (msg, args, client) => {
        if (db.get(`pepole_cooldown_test_${msg.author.id}`) == "true")
        {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Aby użyć tej komendy musisz odczekać 1 godzinę")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        const embed = new MessageEmbed()
            .setAuthor("Gotowe")
            .setColor("GREEN")
            .setDescription(`> Nie masz cooldown ale będziesz miał`)
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        msg.inlineReply(embed)
        db.set(`pepole_cooldown_test_${msg.author.id}`, 'true')
        setTimeout(() => {
            db.set(`pepole_cooldown_test_${msg.author.id}`, 'false')
        }, 3600000);
    }
}