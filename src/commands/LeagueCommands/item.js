const Discord = require('discord.js')
const client = new Discord.Client()
const kayn = ('../kayn')
const { checkItem } = require('./commonFunctions')

exports.run = async (client, message, args) => {
    if(args[0]) {
        kayn.kaynObject.DDragon.Item.list()
        .region(kayn.regions.BRAZIL)
        .callback(function (error, Item) {
            
            //console.log(Item)
            const ItemUnique = new Discord.RichEmbed()
            const OneItem = new Discord.RichEmbed()          
            const TwoItems = new Discord.RichEmbed()          
            const ThreeItems = new Discord.RichEmbed()
            
            //if(Item.data[checkItem(args)] == undefined) return message.channel.send('Digite o nome do item correto.')

            if(Item.data[checkItem(args)].from == null) {
                ItemUnique.setTitle(Item.data[checkItem(args)].name)
                ItemUnique.addField('O que o item faz/da', Item.data[checkItem(args)].plaintext)
                ItemUnique.addField('Preço combinado', Item.data[checkItem(args)].gold.base)
                ItemUnique.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[checkItem(args)].image.full}`)
                ItemUnique.setFooter(`Preço total: ${Item.data[checkItem(args)].gold.total}`)
                message.channel.send(ItemUnique)
            }
            
            if(Item.data[checkItem(args)].from.length == 1) {

                OneItem.setTitle(Item.data[checkItem(args)].name)
                OneItem.addField('O que o item faz/da', Item.data[checkItem(args)].plaintext)
                OneItem.addField('Item que compõe', `${Item.data[Item.data[checkItem(args)].from[0]].name}`)
                OneItem.addField('Preço combinado', Item.data[checkItem(args)].gold.base)
                OneItem.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[checkItem(args)].image.full}`)
                OneItem.setFooter(`Preço total: ${Item.data[checkItem(args)].gold.total}`)
                }
            
            if(Item.data[checkItem(args)].from.length == 2) {
                TwoItems.setTitle(Item.data[checkItem(args)].name)
                TwoItems.addField('O que o item faz/da', Item.data[checkItem(args)].plaintext)
                TwoItems.addField('Itens que compõem', `${Item.data[Item.data[checkItem(args)].from[0]].name} e ${Item.data[Item.data[checkItem(args)].from[1]].name}`)
                TwoItems.addField('Preço combinado', Item.data[checkItem(args)].gold.base)
                TwoItems.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[checkItem(args)].image.full}`)
                TwoItems.setFooter(`Preço total: ${Item.data[checkItem(args)].gold.total}`)
            }

            if(Item.data[checkItem(args)].from.length == 3) {
                ThreeItems.setTitle(Item.data[checkItem(args)].name)
                ThreeItems.addField('O que o item faz/da', `${Item.data[checkItem(args)].plaintext}`, true)
                ThreeItems.addField('Itens que compõem', `${Item.data[Item.data[checkItem(args)].from[0]].name}, ${Item.data[Item.data[checkItem(args)].from[1]].name} e ${Item.data[Item.data[item()].from[2]].name}`, true)
                ThreeItems.addField('Preço combinado', Item.data[checkItem(args)].gold.base)
                ThreeItems.setThumbnail(`https://ddragon.leagueoflegends.com/cdn/${Item.version}/img/item/${Item.data[checkItem(args)].image.full}`)
                ThreeItems.setFooter(`Preço total: ${Item.data[checkItem(args)].gold.total}`)
            }

            switch (Item.data[checkItem(args)].from.length) {
                case 1: return message.channel.send(OneItem); break;
                case 2: return message.channel.send(TwoItems); break;
                case 3: return message.channel.send(ThreeItems); break;

            }           
        })
    }
}