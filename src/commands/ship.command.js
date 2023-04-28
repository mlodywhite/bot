const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
// ty dalej tu jesteś?

module.exports = {
    name: "ship",
    run: async (msg, args, client) => {
        if (!args[0])
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("**Oznacz pierwszą osobę!**")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (!args[1])
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("**Oznacz drugą osobę!**")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        const procentyship = Math.floor(Math.random() * 99) + 1;
        const embed2 = new MessageEmbed()
        .setColor("#c714db")
        .setAuthor("💕 Ship")
        .setDescription(`> Miłość między **${args[0]}** a **${args[1]}** wynosi **${procentyship}%**`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
        msg.inlineReply(embed2)

    }
}