const { Message } = require('discord.js');

exports.run = async (client, message = new Message(), args = []) => {

    const number_one = args[0]
    const operator = args[1]
    const number_two = args[2]
    let result = args.join(' ');

    // console.log(result.split('/'))

    if (result.search('/')) {
        eval()
        const arr = result.split('/');
        console.log(result.substring(result.indexOf('/')))
        console.log(result.substr(result.indexOf('/')))
        for (var i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }
    // switch (operator) {
    //     case '+': return message.channel.send(`Resultado: ${parseInt(number_one) + parseInt(number_two)}`);
    //     case '*': return message.channel.send(`Resultado: ${parseInt(number_one) * parseInt(number_two)}`);
    //     case '-': return message.channel.send(`Resultado: ${parseInt(number_one) - parseInt(number_two)}`);
    //     case '/': return message.channel.send(`Resultado: ${(parseInt(number_one) / parseInt(number_two)).toFixed(2)}`);
    // }

    message.channel.send('ok')
}

