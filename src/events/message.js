const Discord = require("discord.js");

const {
    messages,
    notCommandMusic,
} = require('../functions/funcionalidades')



module.exports = async (client, message) => {


	let bot_prefix = '?';

	if(message.author.bot || message.channel.type == "dm") return;

	messages(message, client)
	notCommandMusic(message)

	if(!message.content.toLowerCase().startsWith(bot_prefix)) return

	const args = message.content.slice(bot_prefix.length).trim().split(/ +/g)
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) 
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	try {

		if(!command) return;

		command.execute(client, message, args);

	} catch (e) {
		console.log(e)

		message.channel.send('Comando inválido')
	}



}