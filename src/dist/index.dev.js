"use strict";

var _require = require('discord.js'),
    Client = _require.Client,
    MessageEmbed = _require.MessageEmbed;

var client = new Client();

var config = require("./config");

var verbot = config.botversion;
var authorbot = config.botauthor;
var botpage = config.botstrona;
var prefix = config.prefix; // Do inlineReply

require("./ExtendedMessage"); // Łapiemy handler i dodajemy go do kodu


var commandHandler = require("./handlers/commmand.handler");

var eventHandler = require("./handlers/event.handler");

var _require2 = require("./config"),
    botversion = _require2.botversion;

commandHandler(client);
eventHandler(client); // Jeżeli bot jest gotowy wykonują sie akcje poniżej

client.on('ready', function () {
  console.log("Bot zalogowa\u0142 si\u0119 jako ".concat(client.user.tag, "!"));
  console.log("Bot jest na ".concat(client.guilds.cache.size));
  client.user.setActivity("PePoShy \uD83E\uDD7A ", {
    type: "PLAYING"
  });
});
client.on("message", function _callee(message) {
  var wzmianka;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          wzmianka = new RegExp("^<@!?".concat(client.user.id, ">( |)$"));

          if (message.content.match(wzmianka)) {
            message.inlineReply(" Witaj! jestem **PeepoShy** mój prefix to **pepo** a podstawową komendą to **pepo help**");
          }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Swięty token Bruna

client.login('ODM0MDM5NTA4ODk0NjEzNTE2.YH7F0g.bZHrefv9_LVZZj3Yo6U5DA96Sys');