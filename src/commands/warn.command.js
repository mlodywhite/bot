const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "warn",
    aliases: ["w"],
    category: "Moderacja",
    run: async(msg, args, client) => {

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
            .setDescription("> Nie podano osoby do ostrzeżenia")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        const reason = args.slice(1).join(" ")
        if(!reason) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podaj powód ostrzeżenia")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if(!warnMember)  {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `KICK_MEMBERS`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (warnMember.id === msg.author.id) {
                const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie możesz ostrzec samego siebię")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
        }

        var warny = db.get(`warns_${msg.guild.id}_${warnMember.id}`)
        db.set(`warns_${msg.guild.id}_${warnMember.id}`, warny + 1)
        var liczbawarn = db.get(`warns_${msg.guild.id}_${warnMember.id}`)
        const embed1 = new MessageEmbed()
        .setColor("RED")
        .setAuthor("Zostałeś ostrzeżony")
        .addField(`Serwer`, `${msg.guild.name}`, false)
        .addField(`Numer warna`, `${liczbawarn}`, false)
        .addField(`Admin`, `<@${msg.author.id}>`, false)
        .addField(`Powód`, `${reason}`, false)
        .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
        await warnMember.send(embed1)
        const embed2 = new MessageEmbed()
        .setColor("RED")
        .setTitle("Ostrzeżono")
        .addField(`Osoba ostrzeżona`, `<@${warnMember.id}>`, false)
        .addField(`Numer warna`, `${liczbawarn}`, false)
        .addField(`Admin`, `<@${msg.author.id}>`, false)
        .addField(`Powód`, `${reason}`, false)
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
                .setAuthor("Logi | Warn")
                .addField(`Osoba Ostrzeżona`, `<@${warnMember.id}>`)
                .addField(`Admin`, `<@${msg.author.id}>`)
                .addField(`Powód`, `${reason}`)
                .addField(`Liczba ostrzeżeń osoby`, `${liczbawarn}`, false)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                kanllexist.send(logi)
            }
            else {
            }
        }
    }
}