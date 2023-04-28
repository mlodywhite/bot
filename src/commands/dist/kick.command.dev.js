"use strict";

var _require = require("discord.js"),
    MessageEmbed = _require.MessageEmbed;

var db = require("quick.db");

module.exports = {
  name: "ban",
  aliases: ["b"],
  category: "Moderacja",
  run: function run(msg, args, client) {
    if (!msg.member.hasPermission(["KICK_MEMBERS"])) return msg.channel.send("Nie masz uprawnień do użycia tej komendy!");
    var kickMember = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);
    if (!kickMember) return msg.channel.send("Nie podano osoby do zbanowania!");
    var reason = args.slice(1).join(" ");
    if (!reason) return msg.channel.send("Podaj powód bana!");
    if (!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.send("Nie mam uprawnień do użycia tej komendy!");
    if (!kickMember) return msg.channel.send("Nie masz uprawnień do użycia tej komendy!");
    if (kickMember.id === msg.author.id) return msg.channel.send("Nie możesz zbanować samego siebie!");
    var embed1 = new MessageEmbed().setAuthor("Tutaj bedzie wiadomosc do uzytrkownika na dm, zrob sobie embeda tutaj");
    var embed2 = new MessageEmbed().setAuthor("Tutaj ogolny embed");
    msg.inlineReply(embed2);
    kickMember.kick(reason);
    kickMember.kick();
  }
}; //wiesz jak to naprawic?