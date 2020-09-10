const db = require('../database/db')
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {

    try {
		const getDBMsg = db.get(message.guild.id).filter(author_id => author_id.author_id == message.author.id).value();

		if(getDBMsg == '') message.channel.send('Você não tem anotações.')
		else {
			const msgMap = getDBMsg.map(o => o.msg);
			const id_msg = getDBMsg.map(o => o.id_msg);
			const dataMsg = getDBMsg.map(o => o.created)

			const embed = new MessageEmbed()
			//39 caracteres
				.setColor('#33001a')
				.setTitle('Anotações')
				.setDescription('Veja abaixo todas as suas anotações')
				.addField('ID', id_msg.join('\n'), true)
				.addField('Mensagem', msgMap.join('\n'), true)
				.addField('Criada', dataMsg.join('\n'), true)
				.setThumbnail(message.author.displayAvatarURL())
				.setFooter('Para apagar uma anotação -> :apagar [ID]');

			message.channel.send(embed)
		}
    } catch (err) {
		console.log(err)
        message.channel.send('Erro ao buscar anotações.');
    }

}