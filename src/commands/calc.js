const { Message } = require('discord.js');
module.exports = {
    
    name: 'calc',
    aliases: ['cac', 'calculadora'],
    async execute(client, message, args) {
        const number_one = args[0]
        const operator = args[1]
        const number_two = args[2]
        let result = args.join(' ');

        let arr =  [...result];
        let filter = arr.filter(n => n.trim());
        let numbers = filter.filter(n => n !== '+')

        console.log(numbers);


        // if (result.search('/')) {
        //     eval()
        //     const arr = result.split('/');
        //     console.log(result.substring(result.indexOf('/')))
        //     console.log(result.substr(result.indexOf('/')))
        //     for (var i = 0; i < arr.length; i++){
        //         console.log(arr[i])
        //     }
        // }
        // switch (operator) {
        //     case '+': return message.channel.send(`Resultado: ${parseInt(number_one) + parseInt(number_two)}`);
        //     case '*': return message.channel.send(`Resultado: ${parseInt(number_one) * parseInt(number_two)}`);
        //     case '-': return message.channel.send(`Resultado: ${parseInt(number_one) - parseInt(number_two)}`);
        //     case '/': return message.channel.send(`Resultado: ${(parseInt(number_one) / parseInt(number_two)).toFixed(2)}`);
        // }

        message.channel.send('ok')
    }
}

