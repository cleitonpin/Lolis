const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = require('./kayn')
const { checkSkin, fila } = require('./commonFunctions')


exports.run = async (client, message, args) => {
    const config = {
        query: 420,
        champion: 67,
        season: 7,
    }

    kayn.kaynObject.Summoner.by.name('BestRengarAL')
    .callback(function(error, summoner) {
        // Note that the grabbing of a matchlist is currently limited by pagination.
        // This API request only returns the first list.
        kayn.kaynObject.Matchlist.by
            .accountID(summoner.accountId)
            .region('br')
            .callback(function(error, matchlist) {
                console.log(matchlist.matches[0])
            
                kayn.kaynObject.Match.get(matchlist.matches[0].gameId).callback(function(error, match) {
                    function transforma_magicamente(s) {
                        function duas_casas(numero){
                            if (numero <= 9){
                                numero = "0"+numero;
                            }
                            return numero;
                        }

                        hora = duas_casas(Math.trunc(s/3600));
                        minuto = duas_casas(Math.trunc((s%3600)/60));
                        segundo = duas_casas((s%3600)%60);
                        formatado = hora+":"+minuto+":"+segundo;

                        return formatado;
                    }
                    console.log(match)
                    cont = 0
                    for (; cont<10;cont++) {
                        var m = matchlist.matches[cont]
                    }
                    const emb = new Discord.RichEmbed()
                    .setTitle('Histórico de partidas')
                    .addField('Campeão jogado nesta partida', `${checkSkin(matchlist.matches[0].champion)}`, true)
                    .addField('Tempo da partida', transforma_magicamente(match.gameDuration), true)
                    .addField('Fila', fila(match.queueId), true)
                    .addField('das', 'dhsd', true)
                    message.channel.send(emb)
                })
            })
    })
}