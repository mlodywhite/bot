"use strict";

var _require = require('discord.js'),
    MessageEmbed = _require.MessageEmbed;

module.exports = {
  name: "zglos",
  category: "Bot",
  run: function run(msg, args, client) {
    var argumenty, Embed, _Embed, _Embed2, _Embed3, Embed2;

    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            argumenty = args.slice(0).join(" ");

            if (argumenty) {
              _context.next = 4;
              break;
            }

            Embed = new MessageEmbed().setAuthor("Błąd!", "https://i.imgur.com/6HVgzTW.gif").setDescription("> Nie podałeś żadnego argumentu!").setColor(0xFF0000).setFooter(msg.author.tag, msg.author.displayAvatarURL({
              dynamic: true
            }));
            return _context.abrupt("return", msg.inlineReply(Embed));

          case 4:
            if (!(argumenty.length > 300)) {
              _context.next = 7;
              break;
            }

            _Embed = new MessageEmbed().setAuthor("Błąd!", "https://i.imgur.com/6HVgzTW.gif").setDescription("> Argumenty nie mogą posiadać więcej niż 300 znaków!").setColor(0xFF0000).setFooter(msg.author.tag, msg.author.displayAvatarURL({
              dynamic: true
            }));
            return _context.abrupt("return", msg.inlineReply(_Embed));

          case 7:
            if (!(argumenty.includes("Gówno") || argumenty.includes("Huj") || argumenty.includes("Debil"))) {
              _context.next = 10;
              break;
            }

            _Embed2 = new MessageEmbed().setAuthor("Błąd!", "https://i.imgur.com/6HVgzTW.gif").setDescription("> Argumenty nie mogą wznośić obrazy dla bota!").setColor(0xFF0000).setFooter(msg.author.tag, msg.author.displayAvatarURL({
              dynamic: true
            }));
            return _context.abrupt("return", msg.inlineReply(_Embed2));

          case 10:
            if (argumenty) {
              _Embed3 = new MessageEmbed().setAuthor("Gotowe!", "https://i.imgur.com/rPttFWM.gif").setDescription("> Zgłoszenie zostało pomyślnie wysłane do administracji serwera! Nasza administracja sprawdzi twoje zgłoszenie w ciągu 24 godzin!").setColor(0x32CD32).setFooter(msg.author.tag, msg.author.displayAvatarURL({
                dynamic: true
              }));
              msg.inlineReply(_Embed3);
              Embed2 = new MessageEmbed().setAuthor("Nowe Zgłoszenie!", "https://i.imgur.com/rPttFWM.gif").setDescription("> Zg\u0142oszenie od **".concat(msg.author.tag, "** \n > Argumenty Zg\u0142oszenia: **").concat(argumenty, "**")).setColor(0x32CD32).setFooter(msg.author.tag, msg.author.displayAvatarURL({
                dynamic: true
              }));
              msg.client.channels.cache.get("835055386385449018").send(Embed2);
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};