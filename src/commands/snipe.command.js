const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "snipe",
    category: "Bot",
    run: async (msg, args, client) => {
        const snipemessage = db.get(`snipe_message_${msg.guild.id}`)
        const snipeauthor = db.get(`snipe_author_${msg.guild.id}`)
        const snipeexist = db.get(`snipe_exist_${msg.guild.id}`)
        
        if (snipeexist == "true")
        {
            const Embed = new MessageEmbed()
            .setAuthor("Snipe!")
            .setColor("GREEN")
            .addField(`${snipeauthor.tag}`, "> **Treść wiadomości:** " + snipemessage)
            .setFooter(`Ta wiadomość zostanie usunięta z bazy danych!`)
            msg.inlineReply(Embed);
            db.set(`snipe_exist_${msg.guild.id}`, "false")

        }
        else {
            const Embed = new MessageEmbed()
            .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
            .setColor("RED")
            .setDescription("> Na tym serwerze jeszcze nikt nie usunął żadnej wiadomości albo usunął ale ktoś pierwszy wpisał komende snipe!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.inlineReply(Embed);
        }
    }
}