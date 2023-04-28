
const { MessageEmbed, Guild } = require('discord.js');
const db = require("quick.db");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "usun-premium",
    aliases: ["premiumnadaj", "nadaj"],
    category: "Bot",
    run: (msg, args, client) => {
        if (!msg.author.id == "644446151210172447" || "572677844023640084")
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie jesteś właścicielem bota!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        let serverid = args[0]
        if (!serverid)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podałeś id serwera do usunięcia premium")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        /*if (!client.guild.get(serverid))
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podany serwer nie istnieje!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }*/
        if (db.get(`premium_${msg.guild.id}`) == "false")
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podany serwer nie posiada premium!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        db.set(`premium_${msg.guild.id}`, "false")
        const embed2 = new MessageEmbed()
        .setColor("RED")
        .setAuthor("Premium Zostało Usunięte!")
        .addField(`Serwer ID`, `${args[0]}`, false)
        .addField(`Premium usunięte przez`, `<@${msg.author.id}>`, false)
        .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
        msg.inlineReply(embed2)
    }
}