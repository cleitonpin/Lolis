const moongose =  require('mongoose');

moongose.connect(null,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
