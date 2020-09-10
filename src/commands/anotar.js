const db = require("../database/db")

function dateToEN(date) {
	return date.split('/').reverse().join('-');
}

exports.run = (client, message, args) => {

    const dateNow = new Date()
    const data = dateToEN(dateNow.toLocaleDateString().toString().replace(/-/gi, '/'));
    const msgs = db.get(message.guild.id).filter(author_id => author_id.author_id == message.author.id).value();
    const msgMap = msgs.map(o => o.msg);

    if(msgMap.join('').length > 1024) message.channel.send('Você ultrapassou o limite de anotações!')
    else {
        const writeDown = args.join(' ').includes('https://') ? args.join(' ').replace('https://', '') : args.join(' ');

        if (writeDown.length > 39) message.channel.send('Você atingiu o limite de caracteres!')
        else {
            try {
                db.get(message.guild.id).push({
                    id_msg: message.id.slice(6, 9),
                    author_id: message.author.id,
                    msg: writeDown,
                    created: data.replace(/-/gi, '/')
                }).write();

                message.channel.send('Mensagem anotada!');
            } catch (err) {
                message.channel.send('Erro ao salvar.');
            }
        }

    }
}