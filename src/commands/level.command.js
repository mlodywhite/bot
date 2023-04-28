const canvaCord = require('canvacord');
const { MessageEmbed, Discord, MessageAttachment} = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;


module.exports = {
    name: "level",
    run: async (msg, args, client) => {

        const rank = new canvaCord.Rank()
        .setAvatar(msg.author.displayAvatarURL({dynamic: true, format: "jpg"}))
        .setCurrentXP(10)
        .setRequiredXP(30)
        // To już nie potrzebne :)
        .setBackground("IMAGE", "https://image.winudf.com/v2/image/Y29tLkxpdmVXYWxscGFwZXJzVUEuYXBwMDE0N19zY3JlZW5zaG90c18wX2Y3ZTdjNWI4/screen-0.jpg?h=355&fakeurl=1&type=.jpg")
        .setLevel(2)
        .setProgressBarTrack('Level')
        .setStatus(msg.author.presence.status)
        .setProgressBar("#eb4034", 'COLOR')// ?
        .setUsername(msg.author.username)
        .setDiscriminator(msg.author.discriminator)

        rank.build().then(data => {
            const attachement = new MessageAttachment(data, `${msg.author.username}Rank.png`)
            msg.channel.send(attachement);
        });
    }
}