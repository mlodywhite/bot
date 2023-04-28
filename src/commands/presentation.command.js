const { MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "presentation",
    run: async (msg, args, client) => {
        const prestext = args.slice(0).join(" ")
        if (!prestext)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano tekstu prezentacji")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (prestext.length > 100)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Podany text nie może osiągnąć więcej niż 100 znaków!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
         let img = await new DIG.LisaPresentation().getImage(prestext);
         let attach = new MessageAttachment(img, "putin.png");
         msg.channel.send(attach)
                

    }
}