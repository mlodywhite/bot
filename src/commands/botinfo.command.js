// siema dziś piszemy sobie botinfo oke? a ty możesz napisać co byś chciał? 
// a co ma być w tym bocie? na czym ma polegać? 
// https://trello.com/c/H9eBLf9y/3-bot-komendy-od-bota-ogólne wejdź na to tam masz komendy do zrobienia 
// sprawdziłeś już? Wysłałem to tez na dsc || teraz wejdź w to

const { MessageEmbed } = require('discord.js');
const os = require('os');
const DiscordJS = require("discord.js");//zacznij pisać ;)
const { mem, cpu } = require('node-os-utils');
const db = require(`quick.db`)
const ms = require('ms');
const { botversion } = require('../config');

module.exports = {
    name: "botinfo",
    aliases: ["staty", "statystyki"],
    category: "Bot",
    run: (msg, args, client) => {

        var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
        var getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + 'mb'
        var guilds = msg.client.guilds.cache.size;
        var users = msg.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
        var channels = msg.client.channels.cache.size;
        var srednia = msg.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0) / msg.client.guilds.cache.size;
        //var emoji = client.emoji.find(emoji => emoji.name === "5564_Loading_Color") 
        var bean = msg.guild.emojis.cache.find(emoji => emoji.name == '5564_Loading_Color');
        const Embed = new MessageEmbed()
        .setTitle("Statystyki Bota")
        .setColor("RED")
        .addField(`Cache`, `> Ilość Serwerów: **${guilds}**
        >  Ilość Kanałów: **${channels}**
        >  Ilość Użytkowników: **${users}**
        >  Średnia Użytkowników na serwerze: **${srednia}**`, false)
        .addField(`Serwer`, `> Opóźnienie Serwera:  **${Date.now() - msg.createdTimestamp}ms.**
        >  Model CPU: **${cpu.model()}**
        >  RAM Bota: **${getpercentage}/9024mb**
        >  Wątki Procesora: **${cpu.count()}**
        >  System Operacyjny: **${os.type} ${os.platform} ${os.release}**
        `, false)
        .addField(`Biblioteki`, `> Discord.JS Wersja: **v${DiscordJS.version}**
        >  Node.JS Wersja: **${process.version}**
        >  Quick.DB Wersja: **${db.version}**
        >  Axios Wersja: **0.21.1**
        >  Chalk Wersja: **4.1.1**`)
        .addField(`Bot`, `> Developerzy: **deloskiyt#1337**, **deloskiyt#1337**
        > Wersja Bota: **${botversion}**`)
        .setFooter(msg.author.tag, msg.author.displayAvatarURL({dynamic: true}));
        msg.inlineReply(Embed);
    }// idx do zapros.command.js
}