/*const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "lvlconfig",
    aliases: ["lvl-config"],
    run: async (client, msg, args) => {

        if(!msg.author.hasPermission(["MANAGE_GUILD"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `Zarządzanie Serwerem`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (!args[0]) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*s!lvlconfig <wlacz/wylacz/kanal>*")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (args[0] === "kanal") {

            const kanal = 
            msg.guild.channels.cache.get(args[1]) ||
            msg.guild.channels.cache.find(x => x.name === args.join("2")) ||
            msg.mentions.channels.first();
    
            if (!kanal)
            {
                const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Aby ustawić kanał do leveli, musisz go oznaczyć!")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            if (!msg.guild.channels.cache.get(kanal.id))             
            {
                const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Aby ustawić kanał do leveli, musisz go oznaczyć!")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        
            if (kanal.type !== "text") 
            {
                const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Aby ustawić kanał do leveli, musisz go oznaczyć!")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
    
            db.set(`lvl_k_${msg.guild.id}`, kanal.id)
            db.get(`ilvl_${msg.guild.id}`, "true")
            const embed2 = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Sukces")
            .setDescription(`> Kanał leveli został ustawiony`)
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(embed2)
    
        } 

        if (args[0] === "wylacz") {
            db.delete(`lvl_k_${msg.guild.id}`)
            db.delete(`expp_${msg.guild.id}`)
            const embed2 = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Wyłączono pomyślnie!")
            .setDescription("> System leveli został wyłączony!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(embed2)
        }

        if (args[0] === "wlacz") {
            db.set(`lvl_k_${msg.guild.id}`, "true")
            const embed3 = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Włączono pomyślnie!")
            .setDescription("> System leveli został włączony!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(embed3)
        }

    }
}*/