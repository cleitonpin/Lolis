const Giphly = require('../api/gif');
const { MessageEmbed, Message } = require('discord.js');

module.expots = {

	name: 'abraco',
	aliases: ['hug', 'paz'],
	async execute(client, message, args) {
		let response = await Giphly.data('hug')
		let numberRandom = response.pagination.count
		let random = Math.floor(Math.random() * numberRandom)
		let giphPunch = response.data[random].images.original.url
	
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		
		const embed = new MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setDescription(`${message.author} te deu um abraço ❤️ ${member} 🤗`)
			.setColor('#e60000')
			.setFooter('Hug')
			.setImage(giphPunch)
			.setTimestamp()
	
		message.delete()
		message.channel.send(embed)
	}

}

