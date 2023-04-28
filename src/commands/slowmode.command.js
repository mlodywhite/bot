const { MessageEmbed } = require("discord.js")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "slowmode",
    category: "Moderacja",
    run: (msg, args, client) => {

        if(!msg.member.hasPermission(["MANAGE_MESSAGES"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `MANAGE_MESSAGE`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if(!args[0]) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podaj czas w sekundach")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if(isNaN(args[0])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podaj właściwą liczbę")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        msg.channel.setRateLimitPerUser(args[0])
        const embed = new MessageEmbed()
        .setAuthor("Ustawiono!")
        .setColor("GREEN")
        .setDescription(`> Pomyślnie ustawiono cooldown na ${args[0]} sekund!`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        msg.inlineReply(embed)
    }
}