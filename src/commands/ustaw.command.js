const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "ustaw",
    aliases: ["b"],
    category: "Moderacja",
    run: async (msg, args, client) => {
        let powczyzeg = args[0];
        let ustawczytext = args[1];
        let text = args.slice(2).join(" ")
        let textdm = args.slice(1).join(" ")
        let kanal = msg.mentions.channels.first()

        let textpowitania = db.get(`text_join_${msg.guild.id}`) || "Nie ustawiono"
        let kanalpowitania = db.get(`kanal_join_${msg.guild.id}`) || "Nie ustawiono"
        let textexit = db.get(`text_exit_${msg.guild.id}`) || "Nie ustawiono" 
        let kanalexit = db.get(`kanal_exit_${msg.guild.id}`) || "Nie ustawiono"

        if(!msg.member.hasPermission(["MANAGE_GUILD"])) {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie posiadasz wymaganych uprawnień do tej komendy `Zarządzanie Serwerem`")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        else {
            if (powczyzeg == "role")
            {
                if (!msg.guild.roles.cache.get(args[1]))
                {
                    const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Wpisz ID Roli!")
                    .setImage('https://imgur.com/GfJ9fxd.png')
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
                else {
                    const rola = msg.guild.roles.cache.get(args[1])
                    db.set(`role_join_exist_${msg.guild.id}`, "true")
                    db.set(`role_join_id_${msg.guild.id}`, rola.id)
                    const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription(`> Rola nadawana przy wejściu została poprawnie ustawiona`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(embed2)
                }
                
            }
            /*if (powczyzeg == "dm")
            {
                if (ustawczytext == "text")
                {
                        if (textdm)
                        {
                            if (text.length < 150)
                            {
                                    db.set(`text_dm_${msg.guild.id}`, `${text}`)
                                    const embed2 = new MessageEmbed()
                                    .setColor("GREEN")
                                    .setAuthor("Sukces")
                                    .setDescription(`> Text został ustawiony jako text powiatania w wiadomości prywatnej!  \n \n **Tekst powitania w wiadomości prywatnej: **` + db.get(`dm_join_${msg.guild.id}`) || "Nie ustawiono")
                                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                                    msg.inlineReply(embed2)
                                }
                            }
                            else {
                                const Embed = new MessageEmbed()
                                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                                .setColor("RED")
                                .setDescription("> Text nie może posiadać więcej niż 150 znaków!")
                                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                                return msg.inlineReply(Embed);
                            }
                        }
                        else {
                            const Embed = new MessageEmbed()
                            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                            .setColor("RED")
                            .setDescription("> Podaj poprawny text dm \n\n **Oznacza osobę** - ${user} \n  **Wpisuje nazwe serwera** - ${servername} \n  **Ilość osób na serwerze** - ${membercount}")
                            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                            return msg.inlineReply(Embed);
                        }

                }
                else 
                {
                    const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*s!ustaw <join/exit/role> <channel/text/state>*")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }


            }*/
            if (powczyzeg == "join")
            {
            
                if (ustawczytext == "channel")
                {
                    if (msg.mentions.channels.first()) {
                        db.set(`kanal_join_${msg.guild.id}`, `${kanal.id}`)
                        const embed2 = new MessageEmbed()
                        .setColor("GREEN")
                        .setAuthor("Sukces")
                        .setDescription(`> Kanał został ustawiony jako kanał powiatania! \n \n **Tekst Powitania:**`+ db.get(`text_join_${msg.guild.id}`) || "Nie ustawiono \n **Kanał Powitania:**"+ db.get(`kanal_join_${msg.guild.id}`) || "Nie ustawiono")
                                                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                        msg.inlineReply(embed2)
                    }
                    else {
                        const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Podaj poprawny kanał")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                        return msg.inlineReply(Embed);
                    }
                }
                else if (ustawczytext == "state")
                {
                    const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Stan Powitania")
                    .setDescription(`**Tekst Powitania:** ${textpowitania} \n **Kanał Powitania:** ${kanalpowitania}`)
                                            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                    msg.inlineReply(embed2)
                }
                else if (ustawczytext == "text")
                {
                    if (text)
                    {
                        if (text.length < 150)
                        {
                            if (text.includes("${user}"))
                            {
                                db.set(`text_join_${msg.guild.id}`, `${text}`)
                                const embed2 = new MessageEmbed()
                                .setColor("GREEN")
                                .setAuthor("Sukces")
                                .setDescription(`> Text został ustawiony jako text powiatania!  \n \n **Tekst Powitania: **` + db.get(`text_join_${msg.guild.id}`) || "Nie ustawiono"+ `\n **Kanał Powitania: **` + db.get(`kanal_join_${msg.guild.id}`) || "Nie ustawiono")
                                                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                                msg.inlineReply(embed2)
                            }
                            else {
                                const Embed = new MessageEmbed()
                                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                                .setColor("RED")
                                .setDescription("> W Tekscie nie może zabraknąć **${user}**!")

                                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                                return msg.inlineReply(Embed);
                            }
                        }
                        else {
                            const Embed = new MessageEmbed()
                            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                            .setColor("RED")
                            .setDescription("> Text nie może posiadać więcej niż 150 znaków!")
                            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                            return msg.inlineReply(Embed);
                        }
                    }
                    else {
                        const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Podaj poprawny text \n\n **Oznacza osobę** - ${user} \n  **Wpisuje nazwe serwera** - ${servername} \n  **Ilość osób na serwerze** - ${membercount}")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                        return msg.inlineReply(Embed);
                    }
                }
                else {
                    const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*ustaw <join/exit/dm> <channel/text/state>*")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
            }
            else if (powczyzeg === "exit")
            {
                if (ustawczytext == "channel")
                {
                    if (msg.mentions.channels.first()) {
                        db.set(`kanal_exit_${msg.guild.id}`, `${kanal.id}`)
                        const embed2 = new MessageEmbed()
                        .setColor("GREEN")
                        .setAuthor("Sukces")
                        .setDescription(`> Kanał został ustawiony jako kanał pożegnania! \n \n **Tekst Pożegnania: **` + db.get(`text_exit_${msg.guild.id}`) || "Nie ustawiono"+ "\n **Kanał Pożegnania: **" + db.get(`kanal_exit_${msg.guild.id}`) || "Nie ustawiono")
                                                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                        msg.inlineReply(embed2)
                    }
                    else {
                        const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Podaj poprawny kanał")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                        return msg.inlineReply(Embed);
                    }
                }
                else if (ustawczytext == "state")
                {
                    const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Stan Pożegnania")
                    .setDescription(`**Tekst Powitania: **` + db.get(`kanal_exit_${msg.guild.id}`) || "Nie ustawiono" + "**Kanał Powitania: **" + db.get(`kanal_exit_${msg.guild.id}`) || "Nie ustawiono")
                                            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                    msg.inlineReply(embed2)
                }
                else if (ustawczytext == "text")
                {
                    if (text)
                    {
                        if (text.length < 150)
                        {
                            if (text.includes("${user}"))
                            {
                                db.set(`text_join_${msg.guild.id}`, `${text}`)
                                const embed2 = new MessageEmbed()
                                .setColor("GREEN")
                                .setAuthor("Sukces")
                                .setDescription(`> Text został ustawiony jako text pożegnania!  \n \n **Tekst Pożegnania: **` + db.get(`text_join_${msg.guild.id}`) || "Nie ustawiono"+ `\n **Kanał Powitania: **` + db.get(`kanal_join_${msg.guild.id}`) || "Nie ustawiono")
                                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                                msg.inlineReply(embed2)
                            }
                            else {
                                const Embed = new MessageEmbed()
                                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                                .setColor("RED")
                                .setDescription("> W Tekscie nie może zabraknąć **${user}**!")
                                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                                return msg.inlineReply(Embed);
                            }
                        }
                        else {
                            const Embed = new MessageEmbed()
                            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                            .setColor("RED")
                            .setDescription("> Text nie może posiadać więcej niż 150 znaków!")
                            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                            return msg.inlineReply(Embed);
                        }
                    }
                    else {
                        const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Podaj poprawny text \n\n **Oznacza osobę** - ${user} \n  **Wpisuje nazwe serwera** - ${servername} \n  **Ilość osób na serwerze** - ${membercount}")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                        return msg.inlineReply(Embed);
                    }
                    /*
                    if (text)
                    {
                        db.set(`text_exit_${msg.guild.id}`, `${text}`)
                        const embed2 = new MessageEmbed()
                        .setColor("GREEN")
                        .setAuthor("Sukces")
                        .setDescription(`> Text został ustawiony jako text pożegnania!  \n \n **Tekst Powitania: **` + db.get(`text_exit_${msg.guild.id}`) || "Nie ustawiono" + `\n **Kanał Powitania: **` + db.get(`kanal_exit_${msg.guild.id}`) || "Nie ustawiono")
                                                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))

                        msg.inlineReply(embed2)
                    }
                    else {
                        const Embed = new MessageEmbed()
                        .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                        .setColor("RED")
                        .setDescription("> Podaj poprawny text \n\n **Oznacza osobę** - ${user} \n  **Wpisuje nazwe serwera** - ${servername} \n  **Ilość osób na serwerze** - ${membercount}")
                        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                        return msg.inlineReply(Embed);
                    }*/
                }
                else {
                    const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*ustaw <join/exit/role> <channel/text/state>*")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                    return msg.inlineReply(Embed);
                }
    
        }
        else {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*ustaw <join/exit/role> <channel/text/state>*")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        }
    }
}
