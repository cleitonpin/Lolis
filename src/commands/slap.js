const Giphly = require('../api/gif');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
	name: 'slap',
	async execute(client, message, args) {

		let response = await Giphly.data('slap')
		let numberRandom = response.pagination.count
		let random = Math.floor(Math.random() * numberRandom)
		let giphPunch = response.data[random].images.original.url
	
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		console.log(member.user.username);
		const embed = new MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setDescription(`${message.author} te deu um tapa ${member} 🤚`)
			.setColor('#6600cc')
			.setImage(giphPunch)
			.setTimestamp()
	
		message.delete()
		message.channel.send(embed)
	}

}

