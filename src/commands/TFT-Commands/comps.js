const Discord = require('discord.js')
const tft = require('../../api/tft_teams_compositions')
const { getEmojitft, getEmojiclassetft } = require('../commonFunctions')

exports.run = async(client, message, args) => {


    let data = await tft.data()
    let items = data.items

    let embed = new Discord.MessageEmbed()
    
    // let classes = items.map(o => retornaChampClass(o.data.classes))
    // let origins = items.map(o => retornaChampClass(o.data.origins))
    let units = items.map(o => retornaChamp(o.data.units))
    let names = items.map(o => o.data.name)


    embed.setTitle('Comando Composições')
    .setDescription("Confira abaixo as composições disponíveis")
    .setColor('#170B3B')
    .addField(`Name`, [
        names[0],
        names[1],
        names[2],
        names[3],
    ],true)
    .addField('Champions', [
        `${getEmojitft(units[0][0], client)}${getEmojitft(units[0][1], client)}${getEmojitft(units[0][2], client)}${getEmojitft(units[0][3], client)}${getEmojitft(units[0][4], client)}${getEmojitft(units[0][5], client)}${getEmojitft(units[0][6], client)}${getEmojitft(units[0][7], client)}`,
        `${getEmojitft(units[1][0], client)}${getEmojitft(units[1][1], client)}${getEmojitft(units[1][2], client)}${getEmojitft(units[1][3], client)}${getEmojitft(units[1][4], client)}${getEmojitft(units[1][5], client)}${getEmojitft(units[1][6], client)}${getEmojitft(units[1][7], client)}`,
        `${getEmojitft(units[2][0], client)}${getEmojitft(units[2][1], client)}${getEmojitft(units[2][2], client)}${getEmojitft(units[2][3], client)}${getEmojitft(units[2][4], client)}${getEmojitft(units[2][5], client)}${getEmojitft(units[2][6], client)}${getEmojitft(units[2][7], client)}`,
        `${getEmojitft(units[3][0], client)}${getEmojitft(units[3][1], client)}${getEmojitft(units[3][2], client)}${getEmojitft(units[3][3], client)}${getEmojitft(units[3][4], client)}${getEmojitft(units[3][5], client)}${getEmojitft(units[3][6], client)}${getEmojitft(units[3][7], client)}`,
    ], true)
    .addField('\u200b', '\u200b',true)
    
    .addField('\u200b', [
        names[4],
        names[5],
        names[6],
        names[7],
    ], true)
    .addField('\u200b', [
        `${getEmojitft(units[4][0], client)}${getEmojitft(units[4][1], client)}${getEmojitft(units[4][2], client)}${getEmojitft(units[4][3], client)}${getEmojitft(units[4][4], client)}${getEmojitft(units[4][5], client)}${getEmojitft(units[4][6], client)}${getEmojitft(units[4][7], client)}`,
        `${getEmojitft(units[5][0], client)}${getEmojitft(units[5][1], client)}${getEmojitft(units[5][2], client)}${getEmojitft(units[5][3], client)}${getEmojitft(units[5][4], client)}${getEmojitft(units[5][5], client)}${getEmojitft(units[5][6], client)}${getEmojitft(units[5][7], client)}`,
        `${getEmojitft(units[6][0], client)}${getEmojitft(units[6][1], client)}${getEmojitft(units[6][2], client)}${getEmojitft(units[6][3], client)}${getEmojitft(units[6][4], client)}${getEmojitft(units[6][5], client)}${getEmojitft(units[6][6], client)}${getEmojitft(units[6][7], client)}`,
        `${getEmojitft(units[7][0], client)}${getEmojitft(units[7][1], client)}${getEmojitft(units[7][2], client)}${getEmojitft(units[7][3], client)}${getEmojitft(units[7][4], client)}${getEmojitft(units[7][5], client)}${getEmojitft(units[7][6], client)}${getEmojitft(units[7][7], client)}`,
        
    ], true)
    .addField('\u200b', '\u200b',true)
    .addField('\u200b', [
        names[8],
        names[9],
        names[10],
        names[11],
    ], true)
    .addField('\u200b', [
        `${getEmojitft(units[8][0], client)}${getEmojitft(units[8][1], client)}${getEmojitft(units[8][2], client)}${getEmojitft(units[8][3], client)}${getEmojitft(units[8][4], client)}${getEmojitft(units[8][5], client)}${getEmojitft(units[8][6], client)}${getEmojitft(units[8][7], client)}`,
        `${getEmojitft(units[9][0], client)}${getEmojitft(units[9][1], client)}${getEmojitft(units[9][2], client)}${getEmojitft(units[9][3], client)}${getEmojitft(units[9][4], client)}${getEmojitft(units[9][5], client)}${getEmojitft(units[9][6], client)}${getEmojitft(units[9][7], client)}`,
        `${getEmojitft(units[10][0], client)}${getEmojitft(units[10][1], client)}${getEmojitft(units[10][2], client)}${getEmojitft(units[10][3], client)}${getEmojitft(units[10][4], client)}${getEmojitft(units[10][5], client)}${getEmojitft(units[10][6], client)}${getEmojitft(units[10][7], client)}`,
        `${getEmojitft(units[11][0], client)}${getEmojitft(units[11][1], client)}${getEmojitft(units[11][2], client)}${getEmojitft(units[11][3], client)}${getEmojitft(units[11][4], client)}${getEmojitft(units[11][5], client)}${getEmojitft(units[11][6], client)}${getEmojitft(units[11][7], client)}`,
    
    ], true)
    .addField('\u200b', '\u200b',true)
    .setFooter(`Versão: ${items[0].data.patchVersion}`)

    message.channel.send(embed)
    

}

retornaChampClass = (string) => {
    let champs = string.split(',')

    return champs
}


retornaChamp = (string) => {
    let champs = string.split(',')

    return champs
}


