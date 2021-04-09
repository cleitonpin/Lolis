const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    championName: {
        type: String,
        required: true
    },
    summonerSpells: {
        type: Array,
        required: true
    },
    winRate: {
        type: String,
        required: true
    },
    banRate: {
        type: String,
        required: false
    },
    pickRate: {
        type: String,
        required: true,
    }
});

const ChampionSchema = mongoose.model('ChampionData', Schema);

module.exports = ChampionSchema;
