

const { MessageEmbed, MessageAttachment } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const db = require('quick.db')
const art = require('ascii-art')

module.exports = {
    name: "ascii",
    run: (msg, args, client) => {
        let argsss = args[0]
        console.log(art.font("Some Text", 'doom', true))
    }
}