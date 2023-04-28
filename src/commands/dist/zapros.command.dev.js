"use strict";

var _require = require('discord.js'),
    MessageEmbed = _require.MessageEmbed;

module.exports = {
  name: "zapros",
  category: "Bot",
  run: function run(msg, args, client) {
    var Embed;
    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Embed = new MessageEmbed().setTitle("Zaproś Bota!").setColor(0x32CD32).setDescription("Cała administracja **Shy** dziękuje z całego serduszka za dodanie naszego bota \n \n [**Zaproś Bota**](https://discord.com/api/oauth2/authorize?client_id=834039508894613516&permissions=8&scope=bot)");
            msg.author.send(Embed);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};