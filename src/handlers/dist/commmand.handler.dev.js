"use strict";

var _require = require("fs"),
    readdirSync = _require.readdirSync;

var _require2 = require("../config.js"),
    prefix = _require2.prefix;

var _require3 = require("discord.js"),
    Collection = _require3.Collection;

var ascii = require("ascii-table");

var table = new ascii().setHeading("Command", "Load status");

module.exports = function (client) {
  // Collections
  client.commands = new Collection();
  var commandFiles = readdirSync(__dirname + "/../commands").filter(function (file) {
    return file.endsWith(".command.js");
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      var command = require(__dirname + "/../commands/".concat(file));

      if (command.name) {
        client.commands.set(command.name, command);
        table.addRow(file, "✅");
      } else {
        table.addRow(file, "❌  -> missing 'name'!");
        continue;
      }
    } //discord se sprawdź

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log(table.toString());
  client.on("message", function (msg) {
    var author = msg.author,
        guild = msg.guild; // Check if user is a bot

    if (author.bot || !guild) {
      return;
    } // Ignore messages without prefix


    if (!msg.content.startsWith(prefix)) return;
    var args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var cmd = args.shift().toLowerCase(); // Check if commands exist

    if (!client.commands.has(cmd)) return;

    try {
      client.commands.get(cmd).run(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply("❌ **Coś poszło nie tak** \n*Wystąpił jakiś nie przewidywany błąd w bocie! Natychmiast użyj komendy* **pepo zglos <co się stało>** *abyśmy mogli temu zaradzić!*");
      msg.reply(error);
    }
  });
};