const Discord = require('discord.js')

const champ = require('./champion.json')

const championApi = require('../../api/champion-api')


    
    let version = await championApi.data()
    let champions = version.data.champions

    
    
    champ.forEach(name => {
        
        
        let id = champions[name]

        return id.key
        
    })
    
        
    




module.exports = {
    data,
}

