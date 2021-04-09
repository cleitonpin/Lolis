const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id_msg: {
        type: String,
        required: true
    },
    author_id: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: false
    }
});

const AnotacoesSchema = mongoose.model('Anotacoes', Schema);

module.exports = AnotacoesSchema;
