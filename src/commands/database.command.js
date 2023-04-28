
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const mysql = require('mysql')
const { inspect } = require("util")

module.exports = {
    name: "database",
    category: "Bot",
    run: async (msg, args, client) => {
        const result = args.slice(0).join(" ");
        const connection = mysql.createConnection({
            host: config.hostdatabase,
            user: config.userdatabase,
            password: config.passworddatabase,
            database: config.databasedb
        });
        connection.connect()

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
            try {
                const querys = connection.query(result)
                console.log(result);
                let resultSuccess = new MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("Sukces")
                    .addField(`Wejście:\n`, '```\n' + `${args.slice(0).join(" ")}` + '```', false)
                    .addField(`Wyjście:\n`, '```\n' + querys + '```', true)
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