const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;


module.exports = {
    name: "linki",
    aliases: ["invite", "inviteme"],
    category: "Bot",
    run: async (msg, args, client) => {
        const Embed = new MessageEmbed()
        .setTitle("Ważne Linki!")
        .setColor("RED")
        .setDescription("[Wejdź na nasz support](offline) \n  [Odwiedź naszą witrynę](" + botpage + ") \n [Chcesz być cool? Dodaj naszego bota!](https://discord.com/api/oauth2/authorize?client_id=981910787062906891&permissions=8&scope=bot)")
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.inlineReply(Embed);
    }
}