const AnotacoesSchema = require('../models/AnotacoesSchema');

function dateToEN(date) {
	return date.split('/').reverse().join('-');
}

module.exports =  {

    name: 'anotar',
    aliases: ['write', 'text'],
    async execute(client, message, args) {
        const dateNow = new Date()
        const date = dateToEN(dateNow.toLocaleDateString().toString().replace(/-/gi, '/'));

        const msgAll = await AnotacoesSchema.find();
        const msgs = msgAll.filter(author_id => author_id.author_id == message.author.id);
        const msgMap = msgs.map(o => o.message);
        const writeDown = args.join(' ').includes('https://') ? args.join(' ').replace('https://', '') : args.join(' ');
        
        if(msgMap.join('').length > 1024) return message.channel.send('Você ultrapassou o limite de anotações!')
        
        if (writeDown.length > 39) return message.channel.send('Você digitou demais!');
        try {
            const data = {
                id_msg: message.id.slice(6, 9),
                author_id: message.author.id,
                message: writeDown,
                created_at: date.replace(/-/gi, '/')
            }
            AnotacoesSchema.create(data, (err) => {
                if (err) return message.channel.send('Erro ao salvar mensagem, tente novamente.');

                return message.channel.send('Mensagem anotada!');
            });
        } catch (err) {
            console.log(err);
            message.channel.send('Erro ao salvar.');
        } 
    }
}