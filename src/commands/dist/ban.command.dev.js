"use strict";

var _require = require("discord.js"),
    MessageEmbed = _require.MessageEmbed;

var db = require("quick.db");

module.exports = {
  name: "kick",
  aliases: ["k"],
  category: "Moderacja",
  run: function run(msg, args, client) {
    if (!msg.member.hasPermission(["KICK_MEMBERS"])) return msg.channel.send("Nie masz uprawnień do użycia tej komendy!");
    var banMember = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);
    if (!banMember) return msg.channel.send("Nie podano osoby do wyrzucenia!");
    var reason = args.slice(1).join(" ");
    if (!reason) return msg.channel.send("Podaj powód wyrzucenia!");
    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send("Nie mam uprawnień do użycia tej komendy!");
    if (!banMember) return msg.channel.send("Nie masz uprawnień do użycia tej komendy!");
    if (banMember.id === msg.author.id) return msg.channel.send("Nie możesz wyrzucić samego siebie!");
    var embed1 = new MessageEmbed().setAuthor("Tutaj bedzie wiadomosc do uzytrkownika na dm, zrob sobie embeda tutaj");
    var embed2 = new MessageEmbed().setAuthor("Tutaj ogolny embed");
    msg.inlineReply(embed2);
    banMember.ban({
      reason: reason
    });
    banMember.ban();
  }
};