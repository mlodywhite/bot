const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "reputacja",
    category: "Bot",
    run: async (msg, args, client) => {
        const useradd = msg.mentions.users.first() || msg.guild.members.cache.get(args[1])
        const addusun = args[0]
        const cooldownsprawdz = db.get(`pepole_cooldown_test_${msg.author.id}`) || "false"
        const cooldownsprawdzz = db.get(`pepole_cooldown_testz_${msg.author.id}`) || "false"
        const reputajcastan = db.get(`reputajca_stan_${msg.guild.id}`) || 'false'
        if (reputajcastan == 'true')
        {
            if (addusun == "dodaj")
            {
                if (cooldownsprawdzz == "true")
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Aby użyć tej komendy musisz odczekać 2 godziny")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                if (!useradd)
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("Oznacz osobę której chcesz przyznać reputacje")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                if (useradd.id == msg.author.id)
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("Nie możesz dać samemu sobie reputacji")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                const embed = new MessageEmbed()
                    .setAuthor("Gotowe")
                    .setColor("GREEN")
                    .setDescription(`> <@${useradd.id}> otrzymał reptuacje od <@${msg.author.id}>!`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed)
                let reptuacjaUser = db.get(`reptuacja_user_${useradd.id}`) || 0
                db.set(`reptuacja_user_${useradd.id}`, reptuacjaUser + 1)
                db.set(`pepole_cooldown_testz_${msg.author.id}`, 'true')

                setTimeout(() => {
                    db.set(`pepole_cooldown_testz_${msg.author.id}`, 'false')
                }, 2 * 60 * 60 * 1000)
            }
            else if (addusun == "usun")
            {
                if (cooldownsprawdz == "true")
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Aby użyć tej komendy musisz odczekać 2 godziny")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                if (!useradd)
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("Oznacz osobę której chcesz usunąć reputacje")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                if (useradd.id == msg.author.id)
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("Nie możesz samemu sobie usunąć reputacji")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                const s =  db.get(`reptuacja_user_${useradd.id}`) || 0
                if (s == 0)
                {
                    const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("Ta osoba nie posiada żadnej reputacji")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                const embed = new MessageEmbed()
                    .setAuthor("Gotowe")
                    .setColor("RED")
                    .setDescription(` <@${msg.author.id}> usunął reptuacje <@${useradd.id}>! `)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed)
                let reptuacjaUser = db.get(`reptuacja_user_${useradd.id}`) || 0
                db.set(`reptuacja_user_${useradd.id}`, reptuacjaUser - 1)
                db.set(`pepole_cooldown_test_${msg.author.id}`, 'true')

                setTimeout(() => {
                    db.set(`pepole_cooldown_test_${msg.author.id}`, 'false')
                }, 2 * 60 * 60 * 1000)
            }
            else if (addusun == "stan")
            {
                const user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author
                const reputacja = db.get(`reptuacja_user_${user.id}`) || 0
                const embed = new MessageEmbed()
                    .setAuthor(`${user.username}`, user.displayAvatarURL({dynamic: true}))
                    .setColor("GREEN")
                    .addField(`Osoba`, `<@${user.id}>`)
                    .addField(`Reputacja`, reputacja)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed)
            }
            else {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("Podaj poprawnę argumenty \n \n **reputacja <dodaj/usun/stan>**")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        }
        else {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("Reputacja na tym serwerze jest wyłączona" + reputajcastan)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

    }
}