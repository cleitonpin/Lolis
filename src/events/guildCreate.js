const Discord = require("discord.js");
const { status } = require('../functions/funcionalidades')

module.exports = async (client, guild) => {

	console.log(`Entrei no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`)
	status(client)

}