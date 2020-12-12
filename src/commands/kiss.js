const Giphly = require('../api/gif');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {

	name: 'kiss',
	aliases: ['beijo', 'beijar'],
	async execute(client, message = new Message(), args) {
		let response = await Giphly.data('kiss')
		let numberRandom = response.pagination.count
		let random = Math.floor(Math.random() * numberRandom)
		let giphPunch = response.data[random].images.original.url || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhUMeCoHjYF9792kONiwqNq3i_EVVvgvTIFQ&usqp=CAU'
	
		let member = message.mentions.members.first() || message.guild.members.get(args[0]);
		
		const embed = new MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setDescription(`${message.author} te deu um beijo ${member} 💋`)
			.setColor('#b300b3')
			.setFooter('Kiss')
			.setImage(giphPunch)
			.setTimestamp()
	
		message.delete()
		message.channel.send(embed)
	}

}

