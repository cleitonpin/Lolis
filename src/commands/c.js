const Discord = require('discord.js')
const kayn = require('../kayn')
const axios = require('axios')

exports.run = async (client, message, args) => {
    //const emojiList = client.emojis.get("624323979619991582")


    let summoner_Name = args.join('').trim()

    if(summoner_Name) {
        getSummonerId(summoner_Name).then(async summoner => {
            getInfoMaestria(summoner.id).then(async info => {

                let vari = info[2].championPoints.toString()

                console.log(info[2].championPoints.toString())
                console.log(vari.length)

                if(vari.length == 6){
                    let v = vari.slice(3)
                    let g = vari.slice(0, 3)
                    let result = g + ',' + v

                    console.log(result) 
                } 
                else if (vari.length == 4) {
                    let v = vari.slice(1)
                    let g = vari.slice(0, 1)
                    let result = g + ',' + v

                    console.log(result) 
                }
                else if(vari.length == 7){
                    let v = vari.slice(0, 1)
                    let x = vari.slice(1, 4)
                    let y = vari.slice(0, 4)

                    console.log(v + ',' + x + ',')
                }
                else if(vari.length == 5) {
                    let v = vari.slice(0, 2)
                    let x = vari.slice(2)

                    console.log(v + ',' + x)
                }


                

            })
            // const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner.id}?api_key=${process.env.RGAPI_KEY}`)
                
            // const { tier } = response.data[0]

            // if(response.data == '') return console.log('d')

            
            // .then(elo => {
            //     //here
            //     console.log(elo.data)
                
            // })
        }) 

    }
    
    
    

}

getSummonerId = async (args) => {
    return await kayn.kaynObject.Summoner.by.name(args).region(kayn.regions.BRAZIL);
}

getInfoMaestria = async (id) => {
    return await  kayn.kaynObject.ChampionMastery.list(id)
}
