class Mobalytics {

    constructor() {
        this.url =  `https://app.mobalytics.gg/api/lol/`;
    }
    
    championMeta(name) {
        const restURL = this.url+`champions/v1/meta?name=${name}`;
        
        return restURL;
    }

    shortMeta() {
        const shortURL = this.url+'champions/v1/shortMeta';

        return shortURL;
    }
}

module.exports = new Mobalytics;