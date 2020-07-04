const Giphly = require('../api/gif')

exports.run = async (client, message, args) => {

    
    let msg = args.join(' ')
    let response = await Giphly.data(msg)
    
    if(response.data == '') return message.channel.send('GIF não encontrado')
    
    let numberRandom = response.pagination.count
    let random = Math.floor(Math.random() * numberRandom)
    let giph = response.data[random].images.original.url
    
    message.delete()
    message.channel.send(giph)
    
}

