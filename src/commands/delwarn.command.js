const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "del-warn",
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

        const warnMember = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
        if(!warnMember) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano osoby")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        let delwarnliczba = args[1]
        if(isNaN(delwarnliczba)) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podaj właściwą liczbę")
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
        var warny = db.get(`warns_${msg.guild.id}_${warnMember.id}`)
        if (args[1]>warny)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Oznaczony użytkownik nie posiada aż tyle warnów! Podaj mniejszą liczbę albo sprawdź komendą **"+db.get(`prefix_${msg.guild.id}`) || "s!"+"warns**")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        db.set(`warns_${msg.guild.id}_${warnMember.id}`, warny - args[1])
        var liczbawarn = db.get(`warns_${msg.guild.id}_${warnMember.id}`)
        const embed2 = new MessageEmbed()
        .setColor("RED")
        .setTitle(`Usunięto ${args[1]} warny`)
        .addField(`Osoba`, `<@${warnMember.id}>`, false)
        .addField(`Usunięto warnów`, `${args[1]}`, false)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        msg.inlineReply(embed2)
        const kanal = db.get(`logi_channel_${msg.guild.id}`) || "Nie ustawiono"
        let kanall = db.get(`logi_exist_${msg.guild.id}`) || "Wyłączone"
        const kanllexist = msg.client.channels.cache.get(kanal)
        if (kanall == "Wyłączone")
        {   

        }
        else {
            if (kanllexist)
            {
                const logi = new MessageEmbed()
                .setColor("RED")
                .setAuthor("Logi | Del Warn")
                .addField(`Osoba`, `<@${warnMember.id}>`)
                .addField(`Admin`, `<@${msg.author.id}>`)
                .addField(`Usunięte Warny`, `${args[1]}`, false)
                .addField(`Aktualna Liczba warnów`, `${liczbawarn}`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                kanllexist.send(logi)
            }
            else {
            }
        }
    }
}