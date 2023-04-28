const { MessageEmbed, MessageAttachment } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require('quick.db')

module.exports = {
    name: "antybot",
    run: (msg, args, client) => {
        const antytype = args[0]
        const typeonoff = args[1]


        if (antytype == "invite")
        {
            if (typeonoff == "on"){
                db.set(`antybot_invite_${msg.guild.id}`, 'true')
                const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription(`> Włączona tryb **AntyInvite** na tym serwerze. Jeżeli kto kolwiek wyśle wiadomość która zawieta link do serwera zostanie ona usunięta`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else if (typeonoff == "off")
            {
                db.set(`antybot_invite_${msg.guild.id}`, 'false')
                const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription(`> Wyłączono tryb **AntyInvite** na tym serwerze`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*antybot <invite/links/spam> <on/off>*")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        }
        else if (antytype == "links")
        {
            if (typeonoff == "on"){
                db.set(`antybot_links_${msg.guild.id}`, 'true')
                const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription(`> Włączona tryb **AntyLinks** na tym serwerze. Jeżeli kto kolwiek wyśle wiadomość która zawieta link zostanie ona usunięta`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else if (typeonoff == "off")
            {
                db.set(`antybot_links_${msg.guild.id}`, 'false')
                const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription(`> Wyłączono tryb **AntyLinks** na tym serwerze`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*antybot <invite/links/spam> <on/off>*")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        }
        else if (antytype == "spam")
        {
            if (typeonoff == "on"){
                db.set(`antybot_spam_${msg.guild.id}`, 'true')
                const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription('> Włączona tryb **AntySpam** na tym serwerze. Jeżeli kto kolwiek wyśle za duża ilość wiadomości w danym okresie czasu zostanie ona usunięta a gracz zostanie ostrzeżony wiadomością od bota zawierająca wiadomość o jego spamie \n \n```yaml\nAntySpam jest w bardzo wczesnej becie nie polecamy jej używać!```')
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else if (typeonoff == "off")
            {
                db.set(`antybot_spam_${msg.guild.id}`, 'false')
                const embed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Sukces")
                    .setDescription(`> Wyłączono tryb **AntySpam** na tym serwerze`)
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.inlineReply(embed2)
            }
            else {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*antybot <invite/links/spam> <on/off>*")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
        }
        else {
            const Embed = new MessageEmbed()
                .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                .setColor("RED")
                .setDescription("**Podaj właściwe argumenty** \n\n**Poprawne Użycie**\n*antybot <invite/links/spam> <on/off>*")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }

    }
}