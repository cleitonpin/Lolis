const axios = require('axios')
const Discord = require('discord.js')




exports.run = async (client, message, args) => {


    
    
    // const url = `https://translate.google.com.br/translate_a/single?client=webapp&sl=en&tl=pt&hl=pt-PT&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=sos&dt=ss&dt=t&dt=gt&ssel=4&tsel=0&xid=45662847&kc=0&tk=318859.138471&q=hello`
    // const json = await axios.get(url)
    // const response = json.data
    // console.log(response[0][0][0])



    const url = `https://cat-fact.herokuapp.com/facts`
    const json = await axios.get(url)
    const response = json.data

    let random = Math.floor(Math.random() * 150)

    message.channel.send(response.all[random].text)

}