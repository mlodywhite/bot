const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "warns",
    aliases: ["w"],
    category: "Moderacja",
    run: (msg, args, client) => {

        if(!msg.member.hasPermission(["KICK_MEMBERS"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `KICK_MEMBERS`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        let warnMember = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.author
        if(!warnMember) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano osoby")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if(!warnMember) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano osoby")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        var liczbawarn = db.get(`warns_${msg.guild.id}_${warnMember.id}`)
        const embed2 = new MessageEmbed()
        .setColor("RED")
        .setTitle("Liczba ")
        .addField(`Osoba`, `<@${warnMember.id}>`, false)
        .addField(`Liczba Ostrzeżeń`, `${liczbawarn}`, false)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        msg.inlineReply(embed2)
    }
}