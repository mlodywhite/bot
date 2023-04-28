const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require('quick.db')

module.exports = {
    name: "setprefix",
    category: "Bot",
    run: async (msg, args, client) => {
        const nowypreifx = args[0]
        const prefix = db.get(`prefix_${msg.guild.id}`) || "s!"
        if (!nowypreifx)
        {
            const Embed = new MessageEmbed()
            .setTitle("Aktualny Prefix")
            .setColor("GREEN")
            .setDescription(`Aktualny prefix bota to **` +  prefix + "**, Aby go zmienić wpisz ``setprefix <[nowyprefix]>``")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
            msg.channel.send(Embed);
        }
        if (nowypreifx) {
            if (nowypreifx.length < 3 || nowypreifx.length == 3)
            {
                db.set(`prefix_${msg.guild.id}`, args[0])
                const Embed = new MessageEmbed()
                .setTitle("Zmieniono")
                .setColor("GREEN")
                .setDescription("Prefix został zmieniony na **"+ args[0] +"**")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                msg.channel.send(Embed);
            }
            else {
                const Embed = new MessageEmbed()
                .setTitle("Coś poszło nie tak")
                .setColor("RED")
                .setDescription("> Prefix jest za długi! Maksymalnie 3 znaki")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                msg.channel.send(Embed);
            }
        }

    }
}