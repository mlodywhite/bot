const { readdirSync } = require("fs")

//const { prefix } = require("../config.js")

const { Collection } = require("discord.js")

const ascii = require("ascii-table")

const table = new ascii().setHeading("Command", "Load status")

const db = require('quick.db')

module.exports = (client, connection) => {
  // Collections
  client.commands = new Collection()

  const commandFiles = readdirSync(__dirname + "/../commands").filter((file) =>
    file.endsWith(".command.js"),
  )

  for (const file of commandFiles) {
    const command = require(__dirname + `/../commands/${file}`)

    if (command.name) {
      client.commands.set(command.name, command)
      table.addRow(file, "✅")
    } else {
      table.addRow(file, "❌  -> missing 'name'!")
      continue
    }
  }
//discord se sprawdź

  console.log(table.toString())

  client.on("message", (msg) => {
    const { author, guild } = msg
    
    // Check if user is a bot
    if (author.bot || !guild) {
      return
    }
    const prefix = db.get(`prefix_${msg.guild.id}`) || "s!";
    // Ignore messages without prefix
    if (!msg.content.startsWith(prefix)) {
      return;
    }
    if (db.get(`gban_${msg.author.id}`) == 'true')
    {
      return;
    }
    const args = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g)

    const cmd = args.shift().toLowerCase()

    // Check if commands exist
    if (!client.commands.has(cmd)) {
      msg.react('❌')
      return;
    }

    try {
      console.log(`✅ | ${msg.author.tag}(${msg.author.id}) wykonał komendę ${cmd}`)
      client.commands.get(cmd).run(msg, args, connection)

    } catch (error) {
      console.error(error)
      msg.reply("❌ **Coś poszło nie tak!** \n*Wystąpił jakiś nie przewidywany błąd w bocie! Natychmiast użyj komendy* **s!zglos <tresc>** *abyśmy mogli temu zaradzić!*")
      msg.reply(error)
    }
  })
}