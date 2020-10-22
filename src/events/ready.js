const { status } = require('../functions/funcionalidades');
const { Client } = require('discord.js');

module.exports = async (client = new Client()) => {
	
	console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`)
	status(client)

}