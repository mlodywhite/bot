const { MessageEmbed, MessageAttachment } = require('discord.js');
const DIG = require("discord-image-generation");
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;

module.exports = {
    name: "delete",
    run: async (msg, args, client) => {
         // Get the avatarUrl of the user
         let avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png' });
         // Make the image
         let img = await new DIG.Delete().getImage(avatar);
         // Add the image as an attachement
         let attach = new MessageAttachment(img, "hitler.png");
         msg.channel.send(attach)
                

    }
}