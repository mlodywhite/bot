
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../config');
const botversion = config.botversion;
const botpage = config.botstrona;
const mysql = require('mysql')

module.exports = {
    name: "crime",
    category: "Bot",
    run: async (msg, args, client) => {
                const connection = mysql.createConnection({
                    host: config.hostdatabase,
                    user: config.userdatabase,
                    password: config.passworddatabase,
                    database: config.databasedb
                });
                connection.connect()
            const cooldownsprawdz = db.get(`pepole_cooldown_crime_${msg.author.id}`) || "false"
            if (cooldownsprawdz == "true")
            {
                const Embed = new MessageEmbed()
                    .setAuthor("Coś poszło nie tak!", `https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/red-x.png`)
                    .setColor("RED")
                    .setDescription("> Aby użyć tej komendy musisz odczekać 2 godziny")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                return msg.inlineReply(Embed);
            }
            const randomSzansa = Math.floor(Math.random() * 5) + 1;
            if (randomSzansa == 4 || randomSzansa == 2)
            {
                const random = Math.floor(Math.random() * 6050) + 700;
                let bazaKonto = db.get(`konto_bazy_ekonomia_${msg.author.id}`) || 'false';
                if (bazaKonto == 'false') {
                    connection.query(`INSERT INTO \`ekonomia\`(\`osobaid\`, \`liczbakasy\`) VALUES ('`+ msg.author.id +`','0')`)
                    db.set(`konto_bazy_ekonomia_${msg.author.id}`, 'true')
                    console.log('stworzono konto w bazie')
                }
                else {

                }
                connection.query('UPDATE `ekonomia` SET `liczbakasy`= `liczbakasy` + ' + random + ' WHERE `osobaid` = '+ msg.author.id )


                const Embed = new MessageEmbed()
                    .setTitle("Zarobiłeś")
                    .setColor("GREEN")
                    .setDescription("Ukradłeś/aś **" + random + "$** pieniędzy!")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.channel.send(Embed)
                //db.set(`pepole_cooldown_crime_${msg.author.id}`, 'true')
                setTimeout(() => {
                    db.set(`pepole_cooldown_crime_${msg.author.id}`, 'false')
                }, 2 * 60 * 60 * 1000)
            }
            else {
                const random2 = Math.floor(Math.random() * -3050) + -300;
                let bazaKonto = db.get(`konto_bazy_ekonomia_${msg.author.id}`) || 'false';
                if (bazaKonto == 'false') {
                    connection.query(`INSERT INTO \`ekonomia\`(\`osobaid\`, \`liczbakasy\`) VALUES ('`+ msg.author.id +`','0')`)
                    db.set(`konto_bazy_ekonomia_${msg.author.id}`, 'true')
                    console.log('stworzono konto w bazie')
                }
                else {

                }
                connection.query('UPDATE `ekonomia` SET `liczbakasy`= `liczbakasy` + ' + random2 + ' WHERE `osobaid` = '+ msg.author.id )

                db.add(`moneykieszen_${msg.author.id}`, random2)

                const Embed = new MessageEmbed()
                    .setTitle("Straciłeś")
                    .setColor("RED")
                    .setDescription("Złapała cię policja, tracisz **" + random2 + "$**!")
                    .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
                msg.channel.send(Embed)
                //db.set(`pepole_cooldown_crime_${msg.author.id}`, 'true')
                setTimeout(() => {
                    db.set(`pepole_cooldown_crime_${msg.author.id}`, 'false')
                }, 2 * 60 * 60 * 1000)
            }
    }
}