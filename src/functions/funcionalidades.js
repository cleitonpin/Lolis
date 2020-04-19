
const bot_status = [
    { name: 'WWZ',  type: 0},
    { name: '🎧' , type: 2},
    { name: '💤',  type: 3},

]

module.exports = {

    async messages(message, client) {

        const msg = message.content.toLowerCase()
        
        if (msg.includes('not stonks'))
            return message.channel.send('https://tenor.com/view/not-stonks-profit-down-sad-frown-arms-crossed-gif-15684535')
        else if(msg.includes('stonks')) 
            return message.channel.send('https://tenor.com/view/stonks-noice-glitch-gif-15021121')
        else if (msg.includes('genio'))
            return message.channel.send(client.emojis.cache.get("589690527742558209").toString())
        else if (msg.includes('kappa')) 
            return message.channel.send(client.emojis.cache.get("592516025334104086").toString())
        else if(msg.includes('nosa')) 
            return message.channel.send(client.emojis.cache.get("598994179464364076").toString())
        else if(msg.startsWith('>gen start')) {
            message.react('688420277272838204')
            setHour = () => {
                message.reply('Pegar o gerador')
            }
            setTimeout(setHour, 14400000)
    
        }
        else if(msg.startsWith('>hr')) {
            message.react('688420277272838204')
    
            setHour = () => {
                message.reply('Hourly get')
            }
    
            setTimeout(setHour, 3600000)
    
        }
    },
    
    async notCommandMusic(message){

        if (message.content.toLowerCase().startsWith('-')) {
            if(message.channel.id !== "670627802004979742") {
                try {
                    message.delete()
                    console.log(`Deleted message from ${message.author.username}`)
                    
                }
                catch (e) {console.log(e)}
                
                
            }
        }
        else if(message.content.toLowerCase().startsWith('p!')){
            if(message.channel.id !== "589611252897284098") {

                
                try {
                    
                    message.delete({ timeout: 1500, reason: 'Neste canal não'})
                    console.log(`Deleted message from ${message.author.username}`)
                    
                }
                catch (e) {console.log(e)}
            }
        }
        else if(message.content.startsWith('Congratulations <@!398223947403100170>!'))  {
            message.delete({ timeout: 1500 })
        }
    },

    async status(client){
        setStatus = () => {
            let randomStatus = bot_status[Math.floor(Math.random() * bot_status.length)]
            return client.user.setPresence({ activity: randomStatus})
        }
    
        setInterval(setStatus, 3000)  
    },

    async updateRoles(client, dados){
        if(dados.t !== "PRESENCE_UPDATE") 
        return
        
    else if(dados.t === "PRESENCE_UPDATE" && client.guilds.cache.get('575815357609148426').members.cache.get(dados.d.user.id)) {
        //console.log(dados.d)
        let serv = client.guilds.cache.get('575815357609148426')
        let membro = serv.members.cache.get(dados.d.user.id)
        
        let roles = {
            lol: serv.roles.cache.get('662333273263046667'),
            apex: serv.roles.cache.get('662699156560936981'),
            dev: serv.roles.cache.get('661743359735496705'),
            tft: serv.roles.cache.get('664556186930118656'),
            js: serv.roles.cache.get('665018735631007754')
        }

        if(dados.d.game == null || dados.d.game.name == null || dados.d.game.name == 'Custom Status') {
            return
        }
        //console.log(dados.d.game.details.search('.js'))

        if(dados.d.game.name == 'Visual Studio Code') {
            if(!membro.roles.cache.has(roles.dev)) {
                membro.roles.add(roles.dev)
            }
        }
        else if(dados.d.game.name == 'League of Legends') {
            if(dados.d.game.details == 'Teamfight Tactics (Normal)' || dados.d.game.details == 'Teamfight Tactics (Ranqueadas)') {
                if(!membro.roles.cache.has(roles.tft)) {
                    membro.roles.add(roles.tft)
                }
            }
            if(!membro.roles.cache.has(roles.lol)) {
                membro.roles.add(roles.lol)
            }
        }
        else if (dados.d.game.name == 'Apex Legends') {
            if(!membro.roles.cache.has(roles.apex)) {
                membro.roles.add(roles.apex)
            }
        }
    }
    },
    
}
