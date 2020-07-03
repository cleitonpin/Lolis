const Discord = require('discord.js')

const lista = (fila, rank, tier) => {
    

    let newEmbed = new Discord.MessageEmbed()
    .setTitle('Lista')
    .setDescription('Olha o que você escolheu')
    .addField('\u200b',  '```' + fila + '```')
    .addField('\u200b', '```' + rank +'```')
    .addField('\u200b',  '```' + tier + '```')
    

    return newEmbed
}

const top5 = (data, rank) => {

    var top5 = new Discord.MessageEmbed()

    for(var i = 0; i < 5; i ++) {

        top5.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top5

}
const top10 = (data, rank) => {

    var top10 = new Discord.MessageEmbed()

    for(var i = 5; i < 10; i ++) {

        top10.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top10

}
const top15 = (data, rank) => {

    var top15 = new Discord.MessageEmbed()

    for(var i = 10; i < 15; i ++) {

        top15.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top15

}
const top20 = (data, rank) => {

    var top20 = new Discord.MessageEmbed()

    for(var i = 15; i < 20; i ++) {

        top20.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top20

}
const top25 = (data, rank) => {

    var top25 = new Discord.MessageEmbed()

    for(var i = 20; i < 25; i ++) {

        top25.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top25

}
const top30 = (data, rank) => {

    var top30 = new Discord.MessageEmbed()

    for(var i = 25; i < 30; i ++) {

        top30.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top30

}
const top35 = (data, rank) => {

    var top35 = new Discord.MessageEmbed()

    for(var i = 30; i < 35; i ++) {

        top35.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top35

}

const top40 = (data, rank) => {

    var top40 = new Discord.MessageEmbed()

    for(var i = 35; i < 40; i ++) {

        top40.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top40

}
const top45 = (data, rank) => {

    var top45 = new Discord.MessageEmbed()

    for(var i = 40; i < 45; i ++) {

        top45.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top45

}
const top50 = (data, rank) => {

    var top50 = new Discord.MessageEmbed()

    for(var i = 45; i < 50; i ++) {

        top50.setColor('#99f')
        .setTitle(`Lista de jogadores do seguinte Elo escolhido: ${rank}`)
        .addField('Nome' , '```'+data[i].summonerName+'```', true)
        .addField('Tier', '```'+data[i].tier+' '+data[i].rank+'```', true)
        .addField('Pontos', '```'+data[i].leaguePoints+'```', true)

    }
    

        return top50

}

const stop = (data, rank) => {

    var stop = new Discord.MessageEmbed()

    stop.setColor('#ff0000')
    .setTitle(`Cancelado `)

    return stop

}






module.exports = {
    lista,
    top5,
    top10,
    top15,
    top20,
    top25,
    top30,
    top35,
    top40,
    top45,
    top50,
    stop
}