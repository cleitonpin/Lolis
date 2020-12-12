const axios = require('axios')
const Discord = require('discord.js')

module.exports = {

    name: 'item',
    async execute(client, message, args) {

        const name = args.join(' ').toLowerCase()
        const full = await data()
        .catch(err => {})
    
        const embed = new Discord.MessageEmbed()
        const name_item = full.filter(it => it.name.toLowerCase() == name)
        const emoji_gold = client.emojis.cache.get("732419646107549806")
        
        embed.setColor('#170B3B')
        .setTitle('Item')
        .setDescription('Informações do item ')
    
        if(name_item == '') {
            embed.setColor('#170B3B')
            .setTitle('❌ Item informado não encontrado')
            .setDescription('Digite o nome do item corretamente!')
    
            message.channel.send(embed)
        } else {
    
    
            
            let item_stats = removeD(name_item[0].stats)
            
    
            embed.addField('Nome', name_item[0].name, true)
            .addField('Preços', [
                `${emoji_gold} Base: ${name_item[0].gold.base}`,
                `${emoji_gold} Vender: ${name_item[0].gold.sell}`,
                `${emoji_gold} Total: ${name_item[0].gold.total}`
            ], true)
            .addField('Descrição', name_item[0].description)
            .addField('Status', item_stats, true)
            .setThumbnail(name_item[0].image_url)
            
            message.channel.send(embed)
        }
    }
}

removeD = (string) => {

    
    string = string.replace(/<stats>|<\/stats|<passive>/g, '')
    string = string.replace(/<\/passive>/g, '')
    string = string.replace(/<br>/g, '\n')
    string = string.replace(/<font color='#CFBF84'>/gi, '')
    string = string.replace(/<\/font>/g, '')
    string = string.replace(/<unique>/g, '')
    string = string.replace(/<\/unique>/g, '')
    string = string.replace(/<groupLimit>/g, '')
    string = string.replace(/<\/groupLimit>/g, '')
    string = string.replace(/<active>/g, '')
    string = string.replace(/<\/active>/g, '')
    string = string.replace(/<scaleLevel>/g, '')
    string = string.replace(/<\/scaleLevel>/g, '')
    string = string.replace(/<scaleHealth>/g, '')
    string = string.replace(/<\/scaleHealth>/g, '')
    string = string.replace(/<mana>/g, '')
    string = string.replace(/<\/mana>/g, '')
    string = string.replace(/<rules>/g, '')
    string = string.replace(/<\/rules>/g, '')
    string = string.replace(/<i>/g, '')
    string = string.replace(/<\/i>/g, '')
    string = string.replace(/<mainText>/g, '')
    string = string.replace(/<\/mainText>/g, '')
    string = string.replace(/<consumable>/g, '')
    string = string.replace(/<\/consumable>/g, '')
    //string = string.replace(/<hr>/g, '')
    


    let item_stats =string.replace(/<hr>/g, '\n')

    return item_stats
} 

data = async () => {
    const url = `https://morelegends.com/pt/api/static_data`
    const JsonData = await axios.get(url)
    const data = JsonData.data


    return data.items
}



