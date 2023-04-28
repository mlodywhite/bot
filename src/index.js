const { Client, MessageEmbed} = require('discord.js');
const DiscordJS = require('discord.js');
const client = new Client(); 
const config = require("./config");
const ErrorMessage = require("./embeds")

const verbot = config.botversion
const authorbot = config.botauthor
const botpage = config.botstrona
const prefix = config.prefix
const every = require('every-moment')
const sys = require('sys')
const util = require('util')
const mysql = require('mysql')

const db = require('quick.db')

// Do inlineReply
require("./ExtendedMessage");

//every(2, 'seconds', function() {
//    console.log("Siema");
//});

const connection = mysql.createConnection({
    host: config.hostdatabase,
    user: config.userdatabase,
    password: config.passworddatabase,
    database: config.databasedb
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    try {
        connection.connect()
        console.log(`Połączono z bazą danych \n \n Informacje o bazie: \n host: ${config.hostdatabase} \n user: ${config.userdatabase} \n passowrd: ${config.passworddatabase} \n database: ${config.databasedb}\n\n`)
    }
    catch (e)
    {
        console.log(e)
    }
});

client.on('message', msg => {
    let dbget = db.get(`antybot_invite_${msg.guild.id}`) || 'false'
    if (dbget == "true")
    {
        const content = msg.content

        if (msg.content.includes("discord.gg/" || "https://discord.gg/" || "discordapp.com/invite/" || "https://discordapp.com/invite/"))
        {
            msg.delete()
            const Embed = new MessageEmbed()
                .setAuthor("Coś ci nie pykło " + msg.author.username + " :)")
                .setColor("RED")
                .setDescription("```yaml\nNie reklamuj się!``` \nTen serwer ochrania **ShieldBot** który umożliwia włączenie trybu **AntyInvite**")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.channel.send(Embed);
        }
    }

});
client.on('message', msg => {
    let dbget = db.get(`antybot_spam_${msg.guild.id}`) || 'false'
    if (dbget == "true") {
        if (msg.author.bot == true)
        {
            return;
        }
        db.add(`antybot_spam_wiadomosci_${msg.author.id}`, 1)
        let wiadomosciNaCzas = db.get(`antybot_spam_wiadomosci_${msg.author.id}`)
        if (wiadomosciNaCzas > 7)
        {
            msg.delete()
            const Embed = new MessageEmbed()
                .setAuthor("Coś ci nie pykło " + msg.author.username + " :)")
                .setColor("RED")
                .setDescription("```yaml\nNie spam!``` \nTen serwer ochrania **ShieldBot** który umożliwia włączenie trybu **AntySpam**")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.channel.send(Embed);
            db.set(`antybot_spam_wiadomosci_${msg.guild.id}`, 0)
        }
        setInterval(() => {
            db.set(`antybot_spam_wiadomosci_${msg.guild.id}`, 0)
        }, 8000)
    }

});

client.on('message', msg => {
    let dbget = db.get(`antybot_links_${msg.guild.id}`) || 'false'
    if (dbget == "true")
    {
        const content = msg.content

        if (msg.content.includes("discord.gg/" || "https://discord.gg/" || "discordapp.com/invite/" || "https://discordapp.com/invite/"))
        {
            return;
        }
        if (msg.content.includes('https://' || 'http://' || 'www.' || '.pl' || '.com' || '.eu' || '.de' || '.gq'))
        {
            msg.delete()
            const Embed = new MessageEmbed()
                .setAuthor("Coś ci nie pykło " + msg.author.username + " :)")
                .setColor("RED")
                .setDescription("```yaml\nNie wysyłaj linków!``` \nTen serwer ochrania **ShieldBot** który umożliwia włączenie trybu **AntyLinks**")
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            return msg.channel.send(Embed);
        }
    }

});

client.on("message", async msg => {
    const wiadomosci = db.get(`messages_${msg.guild.id}`) || 0
    db.set(`messages_${msg.guild.id}`, wiadomosci + 1)
});

// Łapiemy handler i dodajemy go do kodu
const commandHandler = require("./handlers/commmand.handler");
const eventHandler = require("./handlers/event.handler");
const { botversion } = require("./config");

commandHandler(client, connection)
eventHandler(client, connection)
client.on('messageDelete', message => {
  const usermessage = message.author
  const deletedmessagecontent = message.content

  db.set(`snipe_message_${message.guild.id}`, deletedmessagecontent)
  db.set(`snipe_author_${message.guild.id}`, usermessage)
  db.set(`snipe_exist_${message.guild.id}`, "true")
})
client.on('guildMemberAdd', guildMember => {
  
  const id_roli = db.get(`role_join_id_${guildMember.guild.id}`) 
  const roleexist = db.get(`role_join_exist_${guildMember.guild.id}`)
  
  if (roleexist === "true")
  {
    if (guildMember.guild.roles.cache.get(id_roli))
    {
        let role = guildMember.guild.roles.cache.get(id_roli)
      try {
        guildMember.roles.add(role);
      }
      catch (err)
      {
        guildMember.send("Bot nie jest wstanie dać ci odpowiedniej rangi gdyż rola bota jest niżej niz podana range zgłoś się do administracji!")
      }
    }
    else {
      return;
    }
  }
  else {
    return;
  }
})
client.on('guildMemberAdd', guild => {
  const kanal = db.get(`logi_channel_${guild.guild.id}`) || "Nie ustawiono"
  let kanall = db.get(`logi_exist_${guild.guild.id}`) || "Wyłączone"
  const kanllexist = guild.client.channels.cache.get(kanal)
        if (kanall == "Wyłączone")
        {   

        }
        else {
            if (kanllexist)
            {
                const logi = new MessageEmbed()
                .setColor("RED")
                .setAuthor("Logi | Nowa Osoba")
                .addField(`Osoba`, `<@${guild.id}>`)
                .addField("Ilość osób:", `> ${guild.guild.memberCount}`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                kanllexist.send(logi)
            }
            else {
            }
        }
  const embed = new MessageEmbed()
  .setAuthor("Nowy użytkownik")
  .setColor('RED')
  .setDescription(`Na serwerze <@${guild.id}> dodano nowego użytkownika`)
  .addField("Nazwa:", `> ${guild.guild.name}`)
  .addField("Nazwa Osoby:", `> <@${guild.id}>`)
  .addField("Ilość osób:", `> ${guild.guild.memberCount}`)
  client.channels.cache.get("841352060392702003").send(embed)
})

client.on('guildMemberAdd', guildMember => {
        const user = guildMember.user.tag
        const servername = guildMember.guild.name
        const membercount = guildMember.guild.memberCount

        const text = db.get(`text_join_${guildMember.guild.id}`) || "Nie ustawiono"
        const channel = db.get(`kanal_join_${guildMember.guild.id}`) || "Nie ustawiono"
        if (channel == "Nie ustawiono")
        {
            console.log("Nie znaleziono kanału powiatania dla serwera albo są wyłączone "+ servername)
            return;
        }
        else {
                const channelsend = client.channels.cache.get(channel)
                  if (text == "Nie ustawiono")
                  { 
                      const Embed = new MessageEmbed()
                      .setAuthor("Witaj " + guildMember.user.tag, guildMember.user.displayAvatarURL({dynamic: true}))
                      .setColor("GREEN")
                      .setThumbnail(guildMember.user.displayAvatarURL({dynamic: true}))
                      .setDescription(`<@${guildMember.id}> Wbił na **${servername}** jesteś **${membercount}** osobą na tym Serwerze!`)
                      .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                      return channelsend.send(Embed);
                  }
                  else
                  { 
                    
                      const Embed = new MessageEmbed()
                      .setAuthor("Witaj " + guildMember.user.tag, guildMember.user.displayAvatarURL({dynamic: true}))
                      .setColor("GREEN")
                      .setThumbnail(guildMember.user.displayAvatarURL({dynamic: true}))
                      .setDescription(text.replace('${user}', `<@${guildMember.id}>`).replace('${servername}', `**`+servername+`**`).replace('${membercount}', `**`+membercount+`**`))
                      .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                      channelsend.send(Embed);
                      return;
                }
        }
})
/*client.on('channelCreate', guild => {
  const kanal = db.get(`logi_channel_${guild.guild.id}`) || "Nie ustawiono"
  let kanall = db.get(`logi_exist_${guild.guild.id}`) || "Wyłączone"
  const kanllexist = guild.client.channels.cache.get(kanal)
        if (kanall == "Wyłączone")
        {   

        }
        else {
            if (kanllexist)
            {
                const logi = new MessageEmbed()
                .setColor("RED")
                .setAuthor("Logi | Nowy kanał")
                .addField(`Kanał`, `<#${guild.channel.id}>`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                kanllexist.send(logi)
            }
            else {
            }
        }
})*/
client.on('guildMemberRemove', guildMember => {
  const kanal = db.get(`logi_channel_${guildMember.guild.id}`) || "Nie ustawiono"
  let kanall = db.get(`logi_exist_${guildMember.guild.id}`) || "Wyłączone"
  const kanllexist = guildMember.client.channels.cache.get(kanal)
        if (kanall == "Wyłączone")
        {   

        }
        else {
            if (kanllexist)
            {
                const logi = new MessageEmbed()
                .setColor("RED")
                .setAuthor("Logi | Osoba Wyszła")
                .addField(`Osoba`, `<@${guildMember.id}>`)
                .addField("Ilość osób:", `> ${guildMember.guild.memberCount}`)
                .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
                kanllexist.send(logi)
            }
            else {
            }
        }
  const user = guildMember.user.tag
  const servername = guildMember.guild.name
  const membercount = guildMember.guild.memberCount

  const text = db.get(`text_exit_${guildMember.guild.id}`) || "Nie ustawiono"
  const channel = db.get(`kanal_join_${guildMember.guild.id}`) || "Nie ustawiono"


  if (channel == "Nie ustawiono")
  {
      console.log("Nie znaleziono kanału pożegnania dla serwera "+ servername)
      return;
  }
  else {
          const channelsend = client.channels.cache.get(channel)
          if (text == "Nie ustawiono")
          { 
              const Embed = new MessageEmbed()
              .setAuthor("Żegnaj " + guildMember.user.tag, guildMember.user.displayAvatarURL({dynamic: true}))
              .setColor("RED")
              .setThumbnail(guildMember.user.displayAvatarURL({dynamic: true}))
              .setDescription(`<@${guildMember.id}> Wyszedł z serwera!`)
              .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
              return channelsend.send(Embed);
          }
          else
          { 
            
              const Embed = new MessageEmbed()
              .setAuthor("Żegnaj " + guildMember.user.tag, guildMember.user.displayAvatarURL({dynamic: true}))
              .setColor("RED")
              .setThumbnail(guildMember.user.displayAvatarURL({dynamic: true}))
              .setDescription(text.replace('${user}', `<@${guildMember.id}>`).replace('${servername}', `**`+servername+`**`).replace('${membercount}', `**`+membercount+`**`))
              .setFooter(`ShieldBot Bot 2020 - 2021 | ${botversion}`)
              channelsend.send(Embed)
              return;
          }
  }
})

// Jeżeli bot jest gotowy wykonują sie akcje poniżej
client.on('ready', () => {
  console.log(`Bot zalogował się jako ${client.user.tag}!`);
  console.log(`Bot jest na ${client.guilds.cache.size} serverach`);
  setInterval(() => {
    let random = Math.floor((Math.random()*7) + 1); 

    if (random == 1)
    {
      client.user.setActivity(`Pamiętaj, jesteś super!`, ({type: "WATCHING"}));
    }
    else if (random == 3)
    {
      client.user.setActivity(`Dodaj Shield Bota już dziś!`, ({type: "WATCHING"}));
    }
    else if (random == 2)
    {
      client.user.setActivity(`Serwery, które nam zaufały: ${client.guilds.cache.size}`, ({type: "WATCHING"}));
    }
    else if (random == 4)
    {
      client.user.setActivity(`Roboty kiedyś zkolonizują świat! Beep Boop, Boop Beep 🤖`, ({type: "WATCHING"}));
    }
    else if (random == 7)
    {
      client.user.setActivity(`Przeciążenie maszyny! Wybuch nastąpi za 3, 2, 1...`, ({type: "WATCHING"}));
    }
    else if (random == 5)
    {
      client.user.setActivity(`Mój prefix to, s!`, ({type: "WATCHING"}));
    }
    else if (random == 6)
    {
      client.user.setActivity(`Beep Boop, Boop Beep`, ({type: "WATCHING"}));
    }
  }, 5000);
  setInterval(() => {
    const serwery = client.channels.cache.get("1020729931996598372");
    const kanaly = client.channels.cache.get("1020730036929699840");
    const osoby = client.channels.cache.get("1020730073793433692");

    //serwery.setName('🌐 Serwery: ' + client.guilds.cache.size)
    //kanaly.setName('📝 Kanały: ' + client.channels.cache.size)
    //osoby.setName('👥 Osoby: ' + client.guilds.cache.reduce((a, g) => a + g.memberCount, 0))
  }, 10000);
});



  client.on("message", async message => {
    const wzmianka = new RegExp(`^<@!?${client.user.id}>( |)$`);
     if (message.content.match(wzmianka)) {
         const prefix = db.get(`prefix_${message.guild.id}`) || "s!"
          const EmbedMatchWzmianka = new MessageEmbed()
          .setAuthor("Witaj, jestem ShieldBot!" , `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Twemoji2_1f514.svg/1024px-Twemoji2_1f514.svg.png`)
          .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
          .setDescription('Mój prefix to: `'+prefix+'` \nListę komend uzyskasz po wpiszaniu komendy: `'+prefix+'help` \n \n [Wejdź na nasz support](https://discord.gg/PWfhwWf9es) \n  [Odwiedź naszą witrynę](' + botpage + ') \n [Chcesz być cool? Dodaj naszego bota!](https://discord.com/api/oauth2/authorize?client_id=981910787062906891&permissions=8&scope=bot) \n')
          .setColor("RED")
          .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, message.author.displayAvatarURL({dynamic: true}))
          message.inlineReply(EmbedMatchWzmianka);
          /*
          */
        }     
});
client.on('guildCreate', async guild => {
    const embed = new MessageEmbed()
    .setAuthor("Dodano bota!")
    .setColor('RED')
    .addField("Nazwa:", `> ${guild.name}`)
    .addField("Ilość osób:", `> ${guild.memberCount}`)
    client.channels.cache.get("841352060392702003").send(embed)
})
client.on('guildDelete', async guild => {
  const embed = new MessageEmbed()
  .setAuthor("Usunięto bota!")
  .setColor('RED')
  .addField("Nazwa:", `> ${guild.name}`)
  .addField("Ilość osób:", `> ${guild.memberCount}`)
  client.channels.cache.get("841352060392702003").send(embed)
})


 


// Swięty token Bruna
client.login('OTgxOTEwNzg3MDYyOTA2ODkx.GfXLT9.M2eP0LA2T4QRTiBx0Dw0fD6pMjAWKJ3Xt7bx6U');
