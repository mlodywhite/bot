const { MessageEmbed } = require("discord.js")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "clear",
    category: "Moderacja",
    run: (msg, args, client) => {

        if(!msg.member.hasPermission(["MANAGE_MESSAGES"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `MANAGE_MESSAGE`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podano ilość wiadomości do usunięcia")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        
        if (!msg.guild.me.hasPermission(["MANAGE_MESSAGES"])){
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> ShieldBot nie posiada uprawnień do wykonania tej akcji! `MANAGE_MESSAGE`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
            let deleteAmount;

            if (parseInt(args[0]) > 500) {
                deleteAmount = 100;
            } else {
                deleteAmount = parseInt(args[0])
            }
            const embed = new MessageEmbed()
            .setAuthor("Gotowe")
            .setColor("GREEN")
            .setDescription(`> Pomyślnie usunięto ${deleteAmount} wiadomości w tym kanale!`)
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.channel.bulkDelete(deleteAmount, true).then(msg.inlineReply(embed))
    }
}