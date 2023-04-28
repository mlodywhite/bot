
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const mysql = require('mysql')

module.exports = {
    name: "work",
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
            const random = Math.floor(Math.random() * 150) + 10;
            const cooldownsprawdz = db.get(`pepole_cooldown_work_${msg.author.id}`) || "false"
            if (cooldownsprawdz == "true")
            {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Aby użyć tej komendy musisz odczekać 2 godziny")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            let bazaKonto = db.get(`konto_bazy_ekonomia_${msg.author.id}`) || 'false';
            if (bazaKonto == 'false') {
                connection.query(`INSERT INTO \`ekonomia\`(\`osobaid\`, \`liczbakasy\`) VALUES ('`+ msg.author.id +`','0')`)
                db.set(`konto_bazy_ekonomia_${msg.author.id}`, 'true')
                console.log('stworzono konto w bazie')
            }
            else {

            }
            connection.query('UPDATE `ekonomia` SET `liczbakasy`= `liczbakasy` + ' + random + ' WHERE `osobaid` = '+ msg.author.id )
            db.set(`konto_bazy_ekonomia_${msg.author.id}`, 'true')
            const Embed = new MessageEmbed()
            .setTitle("Zarobiłeś")
            .setColor("GREEN")
            .setDescription("Zarobiłeś/aś **" + random + "$** pieniędzy!")
            .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.channel.send(Embed)
            //db.set(`pepole_cooldown_work_${msg.author.id}`, 'true')
            setTimeout(() => {
                db.set(`pepole_cooldown_work_${msg.author.id}`, 'false')
            }, 2 * 60 * 60 * 1000)
    }
}