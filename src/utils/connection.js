const moongose =  require('mongoose');

moongose.connect('mongodb+srv://dbTest:admin@cluster0.k4x76.mongodb.net/rengobot?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);