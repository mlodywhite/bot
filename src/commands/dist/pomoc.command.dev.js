"use strict";

var _require = require('discord.js'),
    MessageEmbed = _require.MessageEmbed;

module.exports = {
  name: "pomoc",
  aliases: ["help", "helpme"],
  category: "Bot",
  run: function run(msg, args, client) {
    var EmbedPomoc, _EmbedPomoc, _EmbedPomoc2;

    return regeneratorRuntime.async(function run$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (args[0] == "Moderacja" || args[0] == "Administracja" || args[0] == "moderacja") {
              EmbedPomoc = new MessageEmbed().setColor(0x32CD32).setAuthor("Moderacja", "https://cdn.discordapp.com/emojis/834739065307004930.png?v=1") // Moderacja
              .setDescription("> **warn** - Ostrzegasz daną osobę! \n > **ban** - Banujesz daną osobę! \n > **unban** - Odbanujesz daną osobę! \n > **kick** - Wyrzucasz daną osobę! \n > **warns** - Sprawdzasz ilość warnów danej osoby! \n > **usun-warn** - Usuwasz warny danej osobie! \n > **clear** - Usuwasz daną liczbę wiadomości! \n > **slowmode** - Ustawiasz slowmode danemu kanałowi!").setFooter(msg.author.tag, "https://cdn.discordapp.com/avatars/".concat(msg.author.id, "/").concat(msg.author.avatar, ".png"));
              msg.inlineReply(EmbedPomoc);
            } else if (args[0] === "4fun") {// tutaj muszę jeszcze uzupełnić
            } else if (args[0] === "Zdjecia") {// tutaj muszę jeszcze uzupełnić
            } else if (args[0] == "Bot" || args[0] == "bot") {// tutaj muszę jeszcze uzupełnić
            } else if (args[0] == "NSFW" || args[0] == "nsfw") {
              _EmbedPomoc = new MessageEmbed().setColor(0x32CD32).setAuthor("Moderacja", "https://cdn.discordapp.com/emojis/834739065307004930.png?v=1") // Moderacja
              .setDescription("> **4k** - Bot wysyła automatycznie wygenerowany obrazek P0RN Gwiazdy! \n > **porn**  - Bot wysyła automatycznie wygenerowany p0rn gif! \n > **boobs** - Bot wysyła automatycznie wygenerowany obrazek b00bs! \n > **ass** - Bot wysyła automatycznie wygenerowany obrazek 4SS! \n > **warns** - Bot wysyła automatycznie wygenerowany obrazek pu22y!").setFooter(msg.author.tag, "https://cdn.discordapp.com/avatars/".concat(msg.author.id, "/").concat(msg.author.avatar, ".png"));
              msg.inlineReply(_EmbedPomoc);
            } else {
              _EmbedPomoc2 = new MessageEmbed().setColor(0x32CD32).setDescription("Aby sprawdzić komendy jakiej kolwiek kategorii wpisz `pepo pomoc <kategoria>`").setAuthor("Pomoc", "https://cdn.discordapp.com/emojis/834739065307004930.png?v=1") // Moderacja
              .addField("Moderacja", "> Aby sprawdzić komendy **moderacyjne** wpisz `pepo pomoc Moderacja`", false).addField("Bot", "> Aby sprawdzić komendy **bot** wpisz `pepo pomoc Bot`", false) // Photos
              .addField("Zdj\u0119cia", "> Aby sprawdzić komendy **zdjęć** wpisz `pepo pomoc Zdjecia`", false) // 4Fun
              .addField("4Fun", "> Aby sprawdzić komendy **4fun** wpisz `pepo pomoc 4fun`", false) // global
              .addField("Global Ekonomia", "> Aby sprawdzić komendy **globalnej ekonomii** wpisz `pepo pomoc Ekonomia`", false) // NSFW
              .addField("NSFW", "> Aby sprawdzić komendy **NSFW** wpisz `pepo pomoc NSFW`", false) // Footer
              .addField("Linki", "[**Dodaj Bota**](https://discord.com/api/oauth2/authorize?client_id=834039508894613516&permissions=8&scope=bot) \n [**Support Server**](https://discord.com/api/oauth2/authorize?client_id=834039508894613516&permissions=8&scope=bot) \n [**Strona Internetowa**](http://peeposhy.tk/) \n").setFooter(msg.author.tag, "https://cdn.discordapp.com/avatars/".concat(msg.author.id, "/").concat(msg.author.avatar, ".png"));
              msg.inlineReply(_EmbedPomoc2);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};