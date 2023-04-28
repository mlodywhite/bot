const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "reputacjaustawienia",
    category: "Bot",
    run: async (msg, args, client) => {

        if (!msg.member.hasPermission(["MANAGE_SERVER"])) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `MANAGE_SERVER`")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (!args[0])
        {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Podaj argumenty ON/OFF")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (args[0] == "OFF" || args[0] == "off")
        {
            db.set(`reputajca_stan_${msg.guild.id}`, 'false')
            const embed = new MessageEmbed()
                .setAuthor(`Gotowe`)
                .setColor("GREEN")
                .setDescription('Reputacja na tym serwerze została wyłączona')
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(embed)
        }
        if (args[0] == "ON" || args[0] == "on")
        {
            db.set(`reputajca_stan_${msg.guild.id}`, 'true')
            const embed = new MessageEmbed()
                .setAuthor(`Gotowe`)
                .setColor("GREEN")
                .setDescription('Reputacja na tym serwerze została włączona')
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(embed)
        }

    }
}