const AnotacoesSchema = require('../models/AnotacoesSchema');

module.exports = {

    name: 'apagar',
    aliases: ['delete'],
    async execute(client, message, args){
        try {
            const id = await AnotacoesSchema.findOne({ id_msg: args[0] });

            if (id === null) return message.channel.send('Você digitou o ID errado!');
            
            return AnotacoesSchema.findOneAndDelete({ id_msg: args[0] }, (err) => {
                if (err) console.log(err);


                message.channel.send('Anotação apagada com sucesso!')
            });
        } catch (err) {
            message.channel.send('Erro ao apagar.')
        }
    }
}