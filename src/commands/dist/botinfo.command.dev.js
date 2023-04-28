"use strict";

// siema dziś piszemy sobie botinfo oke? a ty możesz napisać co byś chciał? 
// a co ma być w tym bocie? na czym ma polegać? 
// https://trello.com/c/H9eBLf9y/3-bot-komendy-od-bota-ogólne wejdź na to tam masz komendy do zrobienia 
// sprawdziłeś już? Wysłałem to tez na dsc || teraz wejdź w to
var _require = require('discord.js'),
    MessageEmbed = _require.MessageEmbed;

var os = require('os');

var DiscordJS = require("discord.js"); //zacznij pisać ;)


var _require2 = require('node-os-utils'),
    mem = _require2.mem,
    cpu = _require2.cpu;

var moment = require('moment');

module.exports = {
  name: "botinfo",
  aliases: ["staty", "statystyki"],
  category: "Bot",
  run: function run(msg, args, client) {
    var usedMemory = os.totalmem() - os.freemem(),
        totalMemory = os.totalmem();
    var getpercentage = (usedMemory / totalMemory * 100).toFixed(2) + 'mb';
    var guilds = msg.client.guilds.cache.size;
    var users = msg.client.guilds.cache.reduce(function (a, g) {
      return a + g.memberCount;
    }, 0);
    var channels = msg.client.channels.cache.size;
    var srednia = msg.client.guilds.cache.reduce(function (a, g) {
      return a + g.memberCount;
    }, 0) / msg.client.guilds.cache.size; //var emoji = client.emoji.find(emoji => emoji.name === "5564_Loading_Color") 

    var bean = msg.guild.emojis.cache.find(function (emoji) {
      return emoji.name == '5564_Loading_Color';
    });
    var Embed = new MessageEmbed().setAuthor("Informacje o Bocie", "https://cdn.discordapp.com/emojis/834851732521484303.gif?v=1").setColor(0x32CD32).addField(" Statystyki Bota", "> Ilo\u015B\u0107 Serwer\xF3w: **".concat(guilds, "**\n        >  Ilo\u015B\u0107 Kana\u0142\xF3w: **").concat(channels, "**\n        >  Ilo\u015B\u0107 U\u017Cytkownik\xF3w: **").concat(users, "**\n        >   \u015Arednia U\u017Cytkownik\xF3w na serwerze: **").concat(srednia, "**"), true).addField("Zasoby Bota", "> Ping Bota:  **".concat(Date.now() - msg.createdTimestamp, "ms.**\n        >  Model CPU: **").concat(cpu.model(), "**\n        >  RAM Bota: **").concat(getpercentage, "/1024mb**\n        >  W\u0105tki Procesora: **").concat(cpu.count(), "**\n        >   Discord.JS Version: **").concat(DiscordJS.version, "**\n        >   Node.JS Version: **").concat(process.version, "**\n        "), true).setFooter(msg.author.tag, msg.author.displayAvatarURL({
      dynamic: true
    }));
    msg.inlineReply(Embed);
  } // idx do zapros.command.js

};