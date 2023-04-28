
const { MessageEmbed } = require('discord.js');
const config = require('../config');
const botversion = config.botversion;
const db = require('quick.db')

module.exports = {
    name: "pomoc",
    aliases: ["help", "helpme"],
    category: "Bot",
    run: async (msg, args, client) => {
        if (args[0]=="Moderacja"||args[0]=="moderacja")
        {
            const EmbedPomoc = new MessageEmbed()
            .setColor("RED")
            .setDescription("`warn` - Ostrzegasz daną **osobę!**\n`ban` - Banujesz daną **osobę!**\n `unban` - Odbanujesz daną **osobę!**\n `kick` - Wyrzucasz daną **osobę!**\n `warns` - Sprawdzasz ilość warnów danej **osoby**!\n `usun-warn` - Usuwasz warny danej **osobie!**\n`clear` - Usuwasz daną **liczbę wiadomości!**\n`slowmode` - Ustawiasz slowmode **danemu kanałowi!**")
            .setTitle("Moderacja")
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
            return;
        }
        else if (args[0]=="Reputacja"||args[0]=="reputacja")
        {
            const EmbedPomoc = new MessageEmbed()
                .setColor("RED")
                .setDescription("`reputacjaustawienia` - Włączasz/Wyłączasz **reputacje** na serwerze\n`reputacja` - Nadajesz danej **osobie reputacje**")
                .setTitle("Reputacja")
                .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
            return;
        }
        else if (args[0]==="4fun"||args[0]==="4Fun")
        {
            const EmbedPomoc = new MessageEmbed()
            .setColor("RED")
            .setDescription("`zawod` - Jaki zawód będziesz wykonwyał w przyszłości\n`zarty` - Ale śmieszny żart ( nie to suchar nie umrzesz ze śmiechu )\n`snipe` - Sniper z ciebie byku\n`kiss` - Całujesz kogoś💕\n`dick` - Masz długiego?\n`ship` - Shipyyyy\n`blur` - Bluruje zdjęcie\n`gay` - (*￣3￣)╭\n`sepia` - Sepia Zdjecie\n`triggered` - Triggered Zdjęcie\n`ad` - Reklama\n`affect` - Affect Zdjecia\n`piekne` - To jest piekne\n`malowanie` - Jakiś ziomek cię maluje pogu\n`confusedstonk` - Confuseddd Stonksss\n`stonk` - Stonksss\n`notstonks` - Nottt Stonksss\n`affect` - Affect Zdjecia\n`delete` - Do kosza cyk\n`facepalm` - Face Palm\n`hitler` - Gorszy niż hitler\n`jail` - Więzienie\n`presentation` - Affect Zdjecia\n`putin` - Putin\n`trash` - Śmieć\n`ciufka` - Ciufkaaaaaa\n`wanted` - Wanted\n")
            .setTitle("4Fun")
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
            return;
        }

        else if (args[0]=="Bot"||args[0]=="bot")
        {
           const EmbedBot = new MessageEmbed()
           .setColor("RED")
           .setDescription("`support` - Wysyła serwer support\n`pomoc` - Wysyła wiadomość pomocy\n`botinfo` - Wysyła statystyki bota\n`staff` - Wysyła wiadomość z naszym stafem\n`linki` - Wysyła linki bota\n`ping` - Wysyła opóźnienie bota\n`avatar` - Wysyła twój albo kogoś avatar\n`severinfo` - Wysyła informacje o serwerze\n`channelinfo` - Wysyła informacje o kanale\n`userinfo` - Wysyła informacje o użytkowniku\n\n")
           .setTitle("Bot")
           .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
           msg.inlineReply(EmbedBot)
           return;
        }
        else if (args[0]=="NSFW"||args[0]=="nsfw")
        {
            const EmbedPomoc = new MessageEmbed()
            .setColor("RED")
            .setDescription("`porn` - Wysyła automatycznie wygenerowany obrazek **P0RN**\n`boobs` - Wysyła automatycznie wygenerowany obrazek **B00BS**\n`pussy` - Wysyła automatycznie wygenerowany obrazek **PU22Y**\n`dick` - Wysyła automatycznie wygenerowany obrazek **D1CK**\n`ass` - Wysyła automatycznie wygenerowany obrazek **A22**")
            .setTitle("NSFW")
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
            return;
        }
        else if (args[0]=="Dev"||args[0]=="dev")
        {
            const EmbedPomoc = new MessageEmbed()
            .setColor("RED")
            .setDescription("`eval` - Wykonuje wskazany kod **JavaScript**\n`gban` - Gbanuje osobę\n`ungban` - Usuwa Gbana\n`eval` - Wykonuje wskazany kod **JavaScript**\n\n *Komendy przedstawiony powyżej są dostępne tylko dla developerów bota!*")
            .setTitle("Dev")
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
            return;
        }
        else if (args[0]=="Config"||args[0]=="config")
        {
            const EmbedPomoc = new MessageEmbed()
            .setColor("RED")
            .setDescription("`ustaw` - Ustawia kanał powitania i pożegnania!\n `logi` - **( BETA )** Ustawia kanał logów!\n`antybot` - **WKRÓTCE** \n `weryfikacja` - **WKRÓTCE**\n\n > Wiemy że nie każdy ogarnia naszego bota posiada on dużo argumentów itp. Więc stworzyliśmy [dokumentacje](https://brak.pl//) oraz [kanał na youtube](http://www.xd.pl) poświęcony naszemu botowi!")
            .setTitle("Konfiguracja")
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
            return;
        }
        else {
            const EmbedPomoc = new MessageEmbed()
            .setColor("RED")
            .setDescription("Witaj! Jest nam niezmiernie miło że zainteresował cię nasz bot! Jeśli masz jakieś pytania/propozycje, dołącz do [serwera developerskiego](https://brakdiscorda.pl). Możesz również odwiedzić naszą [dokumentacje bota](https://brak.pl/), Dodaj również [naszego bota](https://discord.com/api/oauth2/authorize?client_id=981910787062906891&permissions=8&scope=bot)!\n\nAby sprawdzić komendy wybranej kategorii, użyj `pomoc <kategoria>`\n\n> **Kategorie**\n\n**⇒** `pomoc Reputacja` - Wyświetla pomoc do kategorii **Reputacji** **⇐**\n`pomoc Moderacja` - Wyświetla pomoc do kategorii **Moderacja**\n`pomoc Bot` - Wyświetla pomoc do kategorii **Bot**\n`pomoc 4Fun` - Wyświetla pomoc do kategorii **4Fun**\n`pomoc Config` - Wyświetla pomoc do kategorii **Config**\n`pomoc Dev` - Wyświetla pomoc do kategorii **Dev**\n`pomoc Nsfw` - Wyświetla pomoc do kategorii **NSFW**\n\n**> Ważne Komendy**\n`linki` - Wyświetla najważniejsze **linki bota**\n`pomoc` - Wyświetla wszystkie komendy bota\n`staff` - Wyświetla najważniejsze **administracje bota**\n`botinfo` - Wyświetla statystyki **bota**")
            .setTitle("Pomoc (63)")
            .setFooter(`Shield Bot 2020 - 2021 | ${botversion}`, msg.author.displayAvatarURL({dynamic: true}))
            msg.inlineReply(EmbedPomoc)
        }
    }
}