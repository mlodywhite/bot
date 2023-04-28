
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const mysql = require('mysql')
const JSON = require('json')
const util = require('util')

module.exports = {
    name: "bal",
    aliases: ["bal", "konto"],
    category: "Bot",
    run: async (msg, args, client) => {
        const connection = mysql.createConnection({
            host: config.hostdatabase,
            user: config.userdatabase,
            password: config.passworddatabase,
            database: config.databasedb
        });
        connection.connect()
        connection.query('SELECT `liczbakasy` FROM `ekonomia` WHERE osobaid = ' + msg.author.id, (err, results) => {
            const embed = new MessageEmbed()
                .setAuthor(`Portfel ${msg.author.username}`, msg.author.displayAvatarURL({dynamic: true}))
                .setColor("RED")
                .addField("Portfel:", `${util.inspect(results[0]['liczbakasy'])}`, false)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
            msg.channel.send(embed)
        })
    }
}