const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "zapros",
    category: "Bot",
    run: async (msg, args, client) => {

        const Embed = new MessageEmbed()
        .setTitle("Dodaj mnie!")
        .setColor("RED")
        .setDescription("Cała administracja **ShieldBota** zniezmiernie dziękuje za to że chcesz dodać naszego bota na swój serwer! \n \n [Zaproś Bota!](https://discord.com/api/oauth2/authorize?client_id=831470538480025610&permissions=8&scope=bot)")
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}