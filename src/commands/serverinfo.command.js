const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require("quick.db")

module.exports = {
    name: "serverinfo",
    category: "Bot",
    run: async (msg, args, client) => {

        const roles = msg.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString())

        const regions = {
            brazil: ':flag_br: Brazylia',
            europe: ':flag_eu: Europa',
            hongkong: ':flag_hk: Hong Kong',
            india: ':flag_in: Indie',
            japan: ':flag_jp: Japonia',
            russia: ':flag_ru: Rosja',
            singapore: ':flag_sg: Singapur',
            southafrica: ':flag_za: Południowa Afryka',
            sydney: ':flag_sh: Sydney',
        };

        const ver = {
            NONE: 'Nie posiada',
            LOW: 'Niski',
            MEDIUM: 'Średni',
            HIGH: 'Wysoki'
        }
        const Embed = new MessageEmbed()
        .setTitle("Server Info")
        .setColor("RED")
        .setThumbnail(msg.guild.iconURL())
        .addField('Nazwa Serwera', msg.guild.name)
        .addField('ID Serwera', msg.guild.id)
        .addField('Właściciel', msg.guild.owner.user.username)
        .addField('Ilość Osób', msg.guild.memberCount)
        .addField('Level weryfikacji', ver[msg.guild.verificationLevel])
        .addField('Ilość ról', roles.length)
        .addField('Region', regions[msg.guild.region])
        .addField('Avatar Serwera', `[Kliknij!](${msg.guild.iconURL()})`)
        .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
        msg.channel.send(Embed);
    }
}