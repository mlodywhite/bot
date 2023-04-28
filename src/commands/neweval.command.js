
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const { inspect } = require("util")

module.exports = {
    name: "eval",
    category: "Bot",
    run: async (msg, args, client) => {
        const result = args.slice(0).join(" ");
        if (msg.author.id == "644446151210172447" || msg.author.id == "572677844023640084")
        {
            if (!result)
            {

                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Nie podano kodu do wykonaniu")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            if (result.includes('client.token') || result.includes('const config = require("../config")' +
                'config.token'))
            {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Nie możemy wykonać kodu ze względu bezpieczeństwa")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            try {
                let evaled = eval(result);
                console.log(result);
                let resultSuccess = new MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("Sukces")
                    .addField(`Wejście:\n`, '```\n' + `${args.slice(0).join(" ")}` + '```', false)
                    .addField(`Wyjście:\n`, '```\n' + evaled + '```', true)
                    .addField(`Typ:\n`, '```\n' + typeof(evaled) + '```', false)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.channel.send(resultSuccess)

            } catch (error) {
                let resultError = new MessageEmbed()
                    .setColor("#e31212")
                    .setTitle("Error")
                    .addField(`Wejście:\n`, '```\n' + `${args.slice(0).join(" ")}` + '```', false)
                    .addField(`Błąd:\n`, '```\n' + `${error.message}` + '```', true)
                    .addField(`Typ:\n`, '```\n' + typeof(error) + '```', false)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.channel.send(resultError)
            }
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