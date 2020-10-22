const Giphly = require('../api/gif');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    let msg = args.join(' ')
    let response = await Giphly.data(msg)

    if(response.data == '') return message.channel.send('GIF não encontrado')

    let numberRandom = response.pagination.count
    let random = Math.floor(Math.random() * numberRandom)
    let giph = response.data[random].images.original.url

	const embed = new MessageEmbed()
		.setTitle(response.data[random].title)
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setColor('#0092')
		.setImage(giph)
		.setTimestamp()

    message.delete()
    message.channel.send(embed)

}

