const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "ban",
    aliases: ["b"],
    category: "Moderacja",
    run: async (msg, args, client) => {

        if (!msg.member.hasPermission(["KICK_MEMBERS"])) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie posiadasz uprawnień do tej komendy")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        let banMember = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
        if (!banMember) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie podano osoby do zbanowania")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        let reason = args.slice(1).join(" ")
        if (!reason) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Podaj powód zbanowania")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (!msg.guild.me.hasPermission("BAN_MEMBERS")) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Bot nie może wykonać tej akcji, wejdź w role i daj roli ShieldBot permisije Administratorskie")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (!banMember) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie posiadasz uprawnień do tej komendy")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        if (banMember.id === msg.author.id) {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie możesz zbanować samego siebie")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
        if (banMember.id === '686202167878746282')
        {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("> Nie możesz zbanować <@831470538480025610>")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

        const embed1 = new MessageEmbed()
            .setColor("RED")
            .setAuthor("Zostałeś zbanowany")
            .addField(`Serwer`, `${msg.guild.name}`, false)
            .addField(`Osoba zbanowana`, `<@${banMember.id}>`, false)
            .addField(`Admin`, `<@${msg.author.id}>`, false)
            .addField(`Powód`, `${reason}`, false)
            .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
        try {
            await banMember.send(embed1)
        } catch (err)
        {

        }
        const embed2 = new MessageEmbed()
        .setColor("RED")
        .setAuthor("Zbanowano")
        .addField(`Osoba Zbanowana`, `<@${msg.mentions.members.first().id}>`, false)
        .addField(`Admin`, `${msg.author.tag}`, false)
        .addField(`Powód`, `${reason}`, false)
        .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
        try {
            msg.inlineReply(embed2)
        } catch (err)
        {

        }
        try {
            await banMember.ban({ reason: reason})
        }
        catch (err)
        {
            const embed2 = new MessageEmbed()
                .setColor("RED")
                .setAuthor("Coś poszło nie tak!")
                .setDescription('Osoba jakiś cudem nie mogła zostać zbanowana, spróbuj przesunąć range bota wyżej')
                .setFooter(msg.author.tag, `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`);
            msg.inlineReply(embed2)
        }

          const kanal = db.get(`logi_channel_${msg.guild.id}`) || "Nie ustawiono"
       let kanall = db.get(`logi_exist_${msg.guild.id}`) || "Wyłączone"
            const kanllexist = msg.client.channels.cache.get(kanal)
        if (kanall == "Wyłączone")
        {   

        }
        else {
            if (kanllexist)
            {
                const logi = new MessageEmbed()
                .setColor("RED")
                .setAuthor("Logi | Banł")
                .addField(`Osoba`, `<@${banMember.id}>`)
                .addField(`Admin`, `<@${msg.author.id}>`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                kanllexist.send(logi)
            }
            else {
            }
        }
        
    }
}