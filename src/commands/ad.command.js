const { MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const Jimp = require('jimp')
const botpage = config.botstrona;

module.exports = {
    name: "ad",
    run: async (msg, args, client) => {
        const user = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author
         // Get the avatarUrl of the user
         let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
         // Make the image
         let img = await new DIG.Ad().getImage(avatar);
         // Add the image as an attachement
         let attach = new MessageAttachment(img, "beafuti.png");
         msg.channel.send(attach)
                

    }
}