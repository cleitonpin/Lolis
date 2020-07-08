const axios = require('axios')


exports.run = async (client, message, args) => {

    let full =await data()



    console.log(full.data)
}

data = async (anime) => {

    const url = `https://raw.githubusercontent.com/5z3f/lol-static-data/master/static/static-data.en_GB.json`
    const json = await axios.get(url)
    const response = json.data

    return response


}



