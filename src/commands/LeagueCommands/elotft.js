const axios = require('axios')
const kayn = require('../../kayn')
const versions = require('../../api/versions')

exports.run = async (client, message, args) => {

    let full = await data()



    console.log(full.data)
}

data = async () => {
    return kayn.kaynObject.DDragon.Item.list().version(await versions.data())
}



