const axios = require('axios')


const chave_api = 'RGAPI-87970eaa-c601-4969-b0a1-b9dd8a9f5b27'
const summonerID = 'UJQkuiRA8cOjzhldfgFN2wfi33kEoveNtNoDf4ovefXQeoY'

module.exports = {
    async league(req,res) {

        try{

            const response = await axios.get(`https://br1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerID}?api_key=${chave_api}`)

            const summoner = response.data

            console.log(summoner)

        } catch (err){
            console.log(err)
        }

    }
}
