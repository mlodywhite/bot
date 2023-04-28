const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "zglos",
    category: "Bot",
    run: async (msg, args, client) => {
        let argumenty = args.slice(0).join(" ")
        if (!argumenty)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Nie podałeś żadnego argumentu")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (argumenty.length>300)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Argumenty nie mogą posiadać więcej niż 300 znaków")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (argumenty.includes("Gówno")||argumenty.includes("Huj")||argumenty.includes("Debil")||argumenty.includes("Kurwa")||argumenty.includes("Imbecyl"))
        {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Argumenty nie mogą zwnosić obrazy dla bota")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (argumenty)
        {
            const Embed = new MessageEmbed()
            .setAuthor("Wysłano")
            .setColor("GREEN")
            .setDescription("> Zgłoszenie zostało pomyślnie wysłane do administracji serwera! Nasza administracja sprawdzi twoje zgłoszenie w ciągu 24 godzin!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(Embed);

            console.log(`-=-=-=-=-=-=-=- ✨ Nowe Zgłoszenie ✨ -=-=-=-=-=-=-=-\n \n Zgłoszenie od ${msg.author.tag}(${msg.author.id})\n Argumenty Zgłoszenia ${argumenty} \n \n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
            const Embed2 = new MessageEmbed()
            .setAuthor("Nowe Zgłoszenie!")
            .setDescription(`> Zgłoszenie od **${msg.author.tag}** \n> Argumenty Zgłoszenia: **${argumenty}**`)
            .setColor("RED")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.client.channels.cache.get("1020362429688991796").send(Embed2)

            
        }
    }
}