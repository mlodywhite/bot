const { MessageEmbed } = require("discord.js")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "kick",
    aliases: ["b"],
    category: "Moderacja",
    run: async (msg, args, client) => {

        if(!msg.member.hasPermission(["KICK_MEMBERS"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz uprawnień do tej komendy")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        let banMember = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
        if(!banMember) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano osoby do wyrzucenia")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        let reason = args.slice(1).join(" ")
        if(!reason) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podaj powód wyrzucenia")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if(!msg.guild.me.hasPermission("BAN_MEMBERS")) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Bot nie może wykonać tej akcji, wejdź w role i daj roli ShieldBot permisije Administratorskie")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if(!banMember) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz uprawnień do tej komendy")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (banMember.id === msg.author.id) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie możesz wyrzucić samego siebie")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        const embed1 = new MessageEmbed()
        .setColor("RED")
        .setAuthor("Zostałeś wyrzucony")
        .addField(`Serwer`, `${msg.guild.name}`, false)
        .addField(`Osoba wyrzucona`, `<@${banMember.id}>`, false)
        .addField(`Admin`, `<@${msg.author.id}>`, false)
        .addField(`Powód`, `${reason}`, false)
        .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
        await banMember.send(embed1)
        const embed2 = new MessageEmbed()
        .setColor("RED")
        .setAuthor("Wyrzucono")
        .addField(`Osoba Wyrzucona`, `<@${msg.mentions.members.first().id}>`, false)
        .addField(`Admin`, `${msg.author.tag}`, false)
        .addField(`Powód`, `${reason}`, false)
        .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
        msg.inlineReply(embed2)
        
        msg.inlineReply(embed2)
        msg.mentions.members.first().kick(reason)
    }
}//wiesz jak to naprawic?