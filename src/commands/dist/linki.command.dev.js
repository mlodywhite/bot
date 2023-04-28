"use strict";

var _require = require('discord.js'),
    MessageEmbed = _require.MessageEmbed;

module.exports = {
  name: "linki",
  aliases: ["invite", "inviteme"],
  category: "Bot",
  run: function run(msg, args, client) {
    var Embed;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Embed = new MessageEmbed().setTitle("Ważne Linki!").setColor(0x32CD32).addField("Linki", "[**Dodaj Bota**](https://discord.com/api/oauth2/authorize?client_id=981910787062906891&permissions=8&scope=bot) \n [**Support Server**](offline) \n [**Strona Internetowa**](http://shieldbot.pl/) \n");
            msg.inlineReply(Embed);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};