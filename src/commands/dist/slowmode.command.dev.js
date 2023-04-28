"use strict";

var _require = require("discord.js"),
    MessageEmbed = _require.MessageEmbed;

module.exports = {
  name: "slowmode",
  category: "Moderacja",
  run: function run(msg, args, client) {
    if (!msg.member.hasPermission(["MANAGE_MESSAGES"])) return msg.channel.send("Nie masz uprawnień do użycia tej komendy!");
    if (!args[0]) return msg.channel.send("Podaj czas!");
    if (isNaN(args[0])) return msg.channel.send("Podana wartość nie jest liczbą!");
    msg.channel.setRateLimitPerUser(args[0]);
    var embed = new MessageEmbed().setAuthor("Ustawiono!").setColor(0x32CD32).setDescription("> Pomy\u015Blnie ustawiono cooldown na ".concat(args[0], " sekund!")).setFooter("".concat(msg.author.tag), msg.author.displayAvatarURL());
    msg.inlineReply(embed);
  }
};