var request = require('request')


nameOfPokemon = (message, client, url) => {


    var options = {
        url:"https://pokenamew.herokuapp.com/search",
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        json : {
            "image_url": url,
            "resized_images":false // Or true
            }
};
    

    
    request(options,(_err,_res,body)=>{
        client.channels.get(message.channel.id)
            .send(
                `${body.best_guess}`
            )
        message.delete(10000)
        console.log(body.best_guess);
    })

}

module.exports = {

    nameOfPokemon
}











// const SerpWow = require('google-search-results-serpwow')

// let serpwow = new SerpWow('93A151B96FB949E580037AA0B950926E')



// nameOfPokemon = (client, url) => {


//     var params = {
//         image_url: url,
//         search_type: 'reverse_image_search',
//     }
    

//     serpwow.json(params)
//     .then(result => {
//         client.channels.get('589611252897284098')
//             .send(
//                 `<@398223947403100170> o Pokemon ${result.pages_that_include_matching_images[0].title} apareceu!`
//             )
        

//         console.log(JSON.stringify(result.pages_that_include_matching_images[0].title , 0, 2))
        
//     })
//     .catch(error => {
//         console.log(error)
//     })

// }

// module.exports = {

//     nameOfPokemon
// }































// const google = require('googleapis').google
// const customSearch = google.customsearch('v1')

// const googleSearchCredentials = require('./google-search.json')



// module.exports = {
//     async robot() {

//         const imagesArray = await fetchGoogle('Michael Jackson')
//         console.dir(imagesArray , { depth: null })
//         async function fetchGoogle(query){
    
//             const response = await customSearch.cse.list({
//                 auth: googleSearchCredentials.apiKey,
//                 cx: googleSearchCredentials.searchEngineId,
//                 searchType: 'reverse_image_search',
//                 num: 2,
                
//             })
    
//             const imagesURL = response.data.items.map((item) => {
//                 return item.link
//             })
    
//             return imagesURL
    
//         }
//     }
// }
    
