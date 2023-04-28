
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "dep",
    aliases: ["wplacz", "konto"],
    category: "Bot",
    run: async (msg, args, client) => {
        if (!args[0])
        {
            msg.channel.send("Nie podałeś argumentu! liczba/all")
            return;
        }

        if (args[0] == "all")
        {
            let stankontaban = db.get(`moneykieszen_${msg.author.id}`);
            db.add(`moneybank_${msg.author.id}`, stankontaban);
            db.set(`moneykieszen_${msg.author.id}`, 0);
            msg.channel.send("Wszystkie pieniądze zostały wpłacone do banku")
            return;
        } 

        if (!isNaN(args[0]) || parseInt(args[0]) <= 0)
        {
                let ills = args[0]
                stankontakieszen = db.get(`moneykieszen_${msg.author.id}`) || 0;
                stankontabank = db.get(`moneybank_${msg.author.id}`) || 0;
                    db.add(`moneybank_${msg.author.id}`, ills);
                    db.add(`monekieszen_${msg.author.id}`, -ills);
                    msg.channel.send( args[0] + " pieniądze zostały wpłacone do banku")
                    return;
        }

        msg.channel.send("Nie podałeś poprawnego argumentu! liczba/all")
        return;
    }
}