const db = require('../database/db')

module.exports = {

    name: 'apagar',
    aliases: ['delete'],
    execute(client, message, args){
        try {
            const id = db.get(message.guild.id).remove({
                id_msg: args[0]
            }).write()

            if (id == '' || !args) return message.channel.send('Você digitou o ID errado!')
            else message.channel.send('Anotação apagada com sucesso!')
        } catch (err) {
            message.channel.send('Erro ao apagar.')
        }
    }
}