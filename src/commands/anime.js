
const kitsu = require('../api/kitsu-io')
const Discord = require('discord.js')

module.exports = {

    name: 'anime',
    async execute(client, message, args) {
        let anime = args.join("+")
        let data = await kitsu.data(anime)
        let animeInfos = data.data[0]

        console.log(animeInfos.attributes.episodeCount)

        const kitsuEmbed = new Discord.MessageEmbed()

        .setTitle(animeInfos.attributes.canonicalTitle)
        .setDescription(animeInfos.attributes.synopsis)
        if(animeInfos.attributes.ageRatingGuide == '' ) {
            kitsuEmbed.addField('📟 Categoria', 'Não definida', true)
        } else {
            kitsuEmbed.addField('📟 Categoria', animeInfos.attributes.ageRatingGuide, true)
        }
        if(animeInfos.attributes.episodeCount == null){
            kitsuEmbed.addField('💽 Total de episódios', '??', true)   
        } else {
            kitsuEmbed.addField('💽 Total de episódios', animeInfos.attributes.episodeCount, true)
            
        }
        kitsuEmbed.addField('⏲️ Duração de episódio', animeInfos.attributes.episodeLength+'min', true)
        if(animeInfos.attributes.averageRating == null) {
            kitsuEmbed.addField('⭐ Tier average rating', 'N/A', true)    
        }else {
            kitsuEmbed.addField('⭐ Tier average rating', animeInfos.attributes.averageRating, true)
        }
        kitsuEmbed.addField('📅 Data de ínicio', animeInfos.attributes.startDate, true)
        if (animeInfos.attributes.endDate == null) {
            kitsuEmbed.addField('📅 Data final', 'Não finalizado', true)
        } else {
            kitsuEmbed.addField('📅 Data final', animeInfos.attributes.endDate, true)
        }
        if(animeInfos.attributes.ratingRank == null) {
            kitsuEmbed.addField('🏆 Rank', 'N/A', true)    
        } else {
            kitsuEmbed.addField('🏆 Rank', animeInfos.attributes.ratingRank, true)
        }
        
        kitsuEmbed.setFooter('Status: '+animeInfos.attributes.status, animeInfos.attributes.posterImage.tiny)
        .setThumbnail(animeInfos.attributes.posterImage.original)

        
        

        message.channel.send(kitsuEmbed)
    }

}

