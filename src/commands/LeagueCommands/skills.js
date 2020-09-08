const Discord = require('discord.js')
const kayn = require('../../kayn')
const versions = require('../../api/versions')
const versao = require('../../api/versions')

exports.run = async (client, message, args) => {
    
    let topic = client.emojis.cache.get('733165607159201995')
    let name_champ = titleize(args[0])
    const version = await versao.data();
    let embed = new Discord.MessageEmbed()
    if(name_champ == 'Drmundo') name_champ = 'DrMundo'
    else if(name_champ == 'Masteryi') name_champ = 'MasterYi'
    else if(name_champ == 'Jarvaniv') name_champ = 'JarvanIV'
    else if(name_champ == 'Kogmaw') name_champ = 'KogMaw'
    else if(name_champ == 'Leesin') name_champ = 'LeeSin'
    else if(name_champ == 'Missfortune') name_champ = 'MissFortune'
    else if(name_champ == 'Wukong') name_champ = 'MonkeyKing'
    else if(name_champ == 'Xinzhao') name_champ = 'XinZhao'

    let data = await getHablites(name_champ).catch(err => {})

    if(!data) {
        embed.setColor('#170B3B')
        .setTitle('Comando Skills')
        .setDescription(`O campeão informado **não existe**!`)
        .setFooter('Utilize :skills [champion] [p-q-w-e-r]')
    } else {


        if(args[1] == 'q') {

            embed.setColor('#170B3B')
            .setTitle('Comando Skills')
            .setDescription(`Informações sobre ${data.data[name_champ].id} ${args[1].toUpperCase()}`)
            .addField(`${topic} Nome`, data.data[name_champ].spells[0].name)
            .addField(`${topic} Descrição`, removeD(data.data[name_champ].spells[0].description))
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${data.data[name_champ].spells[0].image.full}`)
        }
        else if(args[1] == 'w') {

            embed.setColor('#170B3B')
            .setTitle('Comando Skills')
            .setDescription(`Informações sobre ${data.data[name_champ].id} ${args[1].toUpperCase()}`)
            .addField(`${topic} Nome`, data.data[name_champ].spells[1].name)
            .addField(`${topic} Descrição`, removeD(data.data[name_champ].spells[1].description, name_champ))
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${data.data[name_champ].spells[1].image.full}`)
        }
        else if(args[1] == 'e') {

            embed.setColor('#170B3B')
            .setTitle(`Comando Skills`)
            .setDescription(`Informações sobre ${data.data[name_champ].id} ${args[1].toUpperCase()}`)
            .addField(`${topic} Nome`, data.data[name_champ].spells[2].name)
            .addField(`${topic} Descrição`, removeD(data.data[name_champ].spells[2].description))
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${data.data[name_champ].spells[2].image.full}`)
        }
        else if(args[1] == 'r') {

            embed.setColor('#170B3B')
            .setTitle(`Comando Skills`)
            .setDescription(`Informações sobre ${data.data[name_champ].id} ${args[1].toUpperCase()}`)
            .addField(`${topic} Nome`, data.data[name_champ].spells[3].name)
            .addField(`${topic} Descrição`, removeD(data.data[name_champ].spells[3].description))
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${data.data[name_champ].spells[3].image.full}`)
        }
        else if(args[1] == 'p') {
            args[1] = 'Passiva'
            embed.setColor('#170B3B')
            .setTitle('Comando Skills')
            .setDescription(`Informações sobre ${data.data[name_champ].id} ${args[1]}`)
            .addField(`${topic} Nome`, data.data[name_champ].passive.name)
            .addField(`${topic} Descrição`, removeD(data.data[name_champ].passive.description))
            .setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${data.data[name_champ].passive.image.full}`)
        } 
        else {
            embed.setColor('#170B3B')
            .setTitle('Comando Skills')
            .setDescription(`A habilidade informada **não existe**!`)
            .setFooter('Utilize :skills [champion] [p-q-w-e-r]')
        }
    }

    
    message.channel.send(embed)

}



function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}


removeD = (string) => {
    
    string = string.replace(/<font color='#BB55EE'>/gi, '')
    string = string.replace(/<font color='#FF9900'>/gi, '')
    string = string.replace(/<font color='#FF9900'>/gi, '')
    string = string.replace(/<font color='#6655CC'>/gi, '')
    string = string.replace(/<font color='#9b0f5f'>/gi, '')
    string = string.replace(/<font color='#ee91d7'>/gi, '')
    string = string.replace(/<font color='#FFF673'>/gi, '')
    string = string.replace(/<font color='#cccc00'>/gi, '')
    string = string.replace(/<font color='#8484fb'>/gi, '')
    string = string.replace(/<font color='#fe5c50'>/gi, '')
    string = string.replace(/<font color='#FF8C00'>/gi, '')
    string = string.replace(/<font color='#C200E1'>/gi, '')
    string = string.replace(/<font color='#669900'>/gi, '')
    string = string.replace(/<font color='#99FF99'>/gi, '')
    string = string.replace(/<font color='#cd90ee'>/gi, '')
    string = string.replace(/<font color='#BBFFFF'>/gi, '')
    string = string.replace(/<font color='#FFFFFF'>/gi, '')
    string = string.replace(/<font color='#00DD33'>/gi, '')
    string = string.replace(/<font color='#91d7ee'>/gi, '')
    string = string.replace(/<font color='#FF3300'>/gi, '')
    string = string.replace(/<factionIonia1>/gi, '')

    string = string.replace(/<\/factionIonia1>/gi, '')
    string = string.replace(/<br>/gi, '\n')
    string = string.replace(/<\/font>/gi, '')


    return string

}

getHablites = async (name) => {
    return await kayn.kaynObject.DDragon.Champion.get(name).version(await versions.data())
}
