const { MessageEmbed, MessageAttachment, User } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "kara",
    run: async (msg, args, client) => {
        const user = msg.mentions.members.first()

        if (!user){
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano drugiej osoby")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        else {

            try {
                // Get the avatarUrl of the user
                const avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png' });
                let avatar2 = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
                // Make the image
                let img = await new DIG.Spank().getImage(avatar2, avatar);
                // Add the image as an attachement
                let attach = new MessageAttachment(img, "delete.png");
                msg.channel.send(attach)
            }
            catch {
                const avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png' });

                                // Make the image
                                let img = await new DIG.Spank().getImage(avatar, avatar);
                                // Add the image as an attachement
                                let attach = new MessageAttachment(img, "delete.png");
                                msg.channel.send(attach)
                const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie można wygenerować obrazu z inną głową przepraszamy za niedogodności")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        }
                

    }
}