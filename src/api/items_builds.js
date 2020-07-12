const axios = require('axios')


data = async (name, role) => {

    const url = `https://morelegends.com/pt/api/champions/${name}/stats/item_builds?role=${role}`
    const JsonData = await axios.get(url)
    const data = JsonData.data

    return data

}

module.exports = {
    data,

}
