
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const db = require('quick.db')

module.exports = {
    name: "logi",
    aliases: ["help", "helpme"],
    category: "Bot",
    run: async (msg, args, client) => {
        const ustawczywylaczwlacz = args[0];
        const kanal = msg.mentions.channels.first()

        if(!msg.member.hasPermission(["MANAGE_GUILD"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `Zarządzanie Serwerem`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (ustawczywylaczwlacz)
        {
            if (ustawczywylaczwlacz === "status")
            {
                let kanal = db.get(`logi_channel_${msg.guild.id}`) || "Nie ustawiono"
                if (kanal == "Nie ustawiono")
                {
                    const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Status")
                    .addField(`Kanał Logów`, `>  Nie ustawiono` , false)
                    .addField(`Status Logów`, `> `+ db.get(`logi_exist_${msg.guild.id}`) || "Wyłączone", false)
                    .addField(`O czym będą informować logi`, '> `Wejście Osoby`, `Warn Osoby`, `Ban Osoby`, `Kick Osoby`, `Wyjście Osoby`, `Nowy Kanał`, `Usunięcie Kanału`', false)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(embed2)
                }
                else {
                    const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Status")
                    .addField(`Kanał Logów`, `> <#${kanal}>` , false)
                    .addField(`Status Logów`, `> `+ db.get(`logi_exist_${msg.guild.id}`) || "Wyłączone", false)
                    .addField(`O czym będą informować logi`, '> `Wejście Osoby`, `Warn Osoby`, `Ban Osoby`, `Kick Osoby`, `Wyjście Osoby`, `Nowy Kanał`, `Usunięcie Kanału`', false)

                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(embed2)
                }
            }
            else if (ustawczywylaczwlacz === "wlacz")
            {
                db.set(`logi_exist_${msg.guild.id}`, `Włączone`)
                const embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Sukces")
                .setDescription("> Logi zostały włączone na serwerze")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else if (ustawczywylaczwlacz === "wylacz")
            {
                db.set(`logi_exist_${msg.guild.id}`, `Wyłączone`)
                db.set(`logi_channel_${msg.guild.id}`, 'Nie ustawiono')
                const embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Sukces")
                .setDescription("> Logi zostały wyłączone na serwerze")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else if (ustawczywylaczwlacz === "ustaw")
            {
                if (msg.mentions.channels.first())
                {
                        db.set(`logi_channel_${msg.guild.id}`, `${kanal.id}`)
                        db.set(`logi_exist_${msg.guild.id}`, `Włączone`)
                        const embed2 = new MessageEmbed()
                        .setColor("GREEN")
                        .setAuthor("Sukces")
                        .setDescription("> Ustawiono logi bota")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                        msg.inlineReply(embed2)
                }
                else {
                    const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Podaj kanał logów")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
            }
            else {
                const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*logi <ustaw/wlacz/wylacz/status>*")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        }
        else {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*logi <ustaw/wlacz/wylacz/status>*")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
    }
}