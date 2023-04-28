const { MessageEmbed } = require("discord.js");
const config = require("./config.js");
const versionbot = config.botversion;

function error(channel, content)
{
    const Embed = new MessageEmbed()
    .setTitle("Coś poszło nie tak!")
    .setColor("RED")
    .setDescription(content)
    .setFooter(`ShieldBot Bot 2020 - 2021 | ${versionbot}`)
    channel.send(Embed);
}