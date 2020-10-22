const Discord = require("discord.js");
const { updateRoles } = require('../functions/funcionalidades')

module.exports = async (client, dados) => {
	updateRoles(client,dados)
}