const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

const { Kayn, REGIONS } = require('kayn')
const kayn = Kayn('RGAPI-1f5502d8-0612-422b-9163-a097af8eff92')({
    region: REGIONS.LATIN_AMERICA_SOUTH,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'pt-BR',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
})

client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`)
    client.user.setStatus('Availabe')
    client.user.setPresence({
        game: {
            name: 'Liga das lendas',
            type: "STREAMING",
            url: "https://www.twitch.tv/cleitonpin"
        }
    })
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    const emojiList = client.emojis.get("624323979619991582")

    try {
        let commands = require(`./commands/${comando}.js`);
        commands.run(client, message, args);
    } catch (e){
        console.log(e)
    } 

})


client.login(config.token);