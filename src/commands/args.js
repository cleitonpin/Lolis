module.exports = {
	name: 'args',
	description: 'Information about the arguments provided.',
	usage: '<args>',
	execute(message, args) {
		try {
			// if (!args.length) {
			// 	return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			// } else if (args[0] === 'foo') {
			// 	return message.channel.send('bar');
			// }
			message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);

		} catch (e) {
			console.log(e);
		}
	},
	
};