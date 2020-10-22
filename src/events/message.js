const Discord = require("discord.js");

const {
    messages,
    notCommandMusic,
} = require('../functions/funcionalidades')

module.exports = async (client, message) => {

	let bot_prefix = ':';
	let prefixLol = ':lol';

	if(message.author.bot || message.channel.type == "dm") return;

	messages(message, client)
	notCommandMusic(message)

	if(!message.content.toLowerCase().startsWith(bot_prefix)) return

	const args = message.content.slice(bot_prefix.length).trim().split(/ +/g)
	const comando = args.shift().toLowerCase()

	try {
		if (message.content.startsWith(prefixLol)) {
			let args = message.content.slice(prefixLol.length).trim().split(/ +/g)
			let comando = args.shift().toLowerCase()

			const commandsLeague = require(`../commands/LeagueCommands/${comando}.js`)

			commandsLeague.run(client, message, args)
		}
		else {

			const commands = require(`../commands/${comando}.js`)
			commands.run(client, message, args,)
		}


	} catch (e) {
		console.log(e)

		message.channel.send('Comando inválido')
	}



}