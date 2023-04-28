const { MessageEmbed, MessageAttachment } = require('discord.js');
const db = require('quick.db')
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "ungban",
    run: async (msg, args, client) => {
        if (msg.author.id == "474912313871302656" || msg.author.id == "572677844023640084")
        {
            if (!args[0])
            {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Nie podałeś id osoby do gbana")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            if (db.get(`gban_${args[0]}`) == "false")
            {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Podana osoba nie posiada gban!")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            db.set(`gban_${args[0]}`, 'false')
            const embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Sukces")
                .addField(`UnGBan dla`, `${args[0]}`, false)
                .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
            msg.inlineReply(embed2)
            const embed = new MessageEmbed()
                .setAuthor("Usunięto GBan")
                .setColor('RED')
                .addField("ID:", `> ${args[0]}`)
            msg.client.channels.cache.get("841352107524620308").send(embed)
        }

        else {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie jesteś właścicielem bota!")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
    }
}