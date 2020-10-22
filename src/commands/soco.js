const Giphly = require('../api/gif');
const { MessageEmbed, Message } = require('discord.js');
const messages = new Message();

exports.run = async (client, message = messages, args = []) => {

	let response = await Giphly.data('punch')
    let numberRandom = response.pagination.count
    let random = Math.floor(Math.random() * numberRandom)
	let giphPunch = response.data[random].images.original.url

	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	console.log(member.user.username);
	const embed = new MessageEmbed()
		.setTitle('BRIGA!')
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setDescription(`${message.author} te deu um soco ${member} 👊`)
		.setColor('#0092')
		.setFooter('Briga Briga Briga')
		.setImage(giphPunch)
		.setTimestamp()

    message.delete()
    message.channel.send(embed)

}

