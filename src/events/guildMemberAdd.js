const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {

	const guild = client.guilds.cache.get("575815357609148426");
	const channel = client.channels.cache.get("618232063170183198");
	const emoji = member.guild.emojis.cache.find((emojiName) => emojiName.name === "tuts");

	const embed = new MessageEmbed()
		.setColor('#0032')
		.setDescription(`${member.user}, Boas vindas ao ${guild.name}, com ${member.guild.memberCount} membros`)
		.setTitle(`${emoji} Boas vindas ${emoji}`)
		.setAuthor(member.user.tag, member.user.displayAvatarURL())
		.setImage('https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif')
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
		.setFooter(`ID do úsuario: ${member.user.id}`)
		.setTimestamp();

	channel.send(embed);

}