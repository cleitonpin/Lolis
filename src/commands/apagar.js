const db = require('../database/db')

exports.run = (client, message, args) => {

    try {
        db.get(message.guild.id).remove({
            id_msg: args[0]
        }).write()

        message.channel.send('Anotação apagada com sucesso!')
    } catch (err) {
        message.channel.send('Erro ao apagar.')
    }
}