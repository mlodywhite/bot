const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "zarty",
    run: async (msg, args, client) => {
        let url = "https://api.luxbot.ml/zart"
            let image, repsonse;
                response = await axios.get(url)
                image = response.data;
            
                const Embed = new MessageEmbed()
                .setAuthor("🤣 Śmieszne HiHi")
                .setColor("GREEN")
                .setDescription(image.zart)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);

    }
}