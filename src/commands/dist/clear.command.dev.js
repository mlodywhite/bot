"use strict";

var _require = require("discord.js"),
    MessageEmbed = _require.MessageEmbed;

module.exports = {
  name: "clear",
  category: "Moderacja",
  run: function run(msg, args, client) {
    if (!msg.member.hasPermission(["MANAGE_MESSAGES"])) return msg.channel.send("Nie masz uprawnień do użycia tej komendy!");
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) return msg.channel.send("Nie podano ilości wiadomości wymaganej dla użycia tej komendy");
    if (!msg.guild.me.hasPermission(["MANAGE_MESSAGES"])) return msg.channel.send("Nie posiadam uprawnień do wykonania tego polecenia!");
    var deleteAmount;

    if (parseInt(args[0]) > 500) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    var embed = new MessageEmbed().setAuthor("Wyczyszczono!").setColor(0x32CD32).setDescription("> Pomy\u015Blnie wyczyszczono **".concat(args[0], "** wiadomo\u015Bci!")).setFooter("".concat(msg.author.tag), msg.author.displayAvatarURL({
      dynamic: true
    }));
    msg.channel.bulkDelete(deleteAmount, true).then(msg.inlineReply(embed));
  }
};