var express = require('express');
var router = express.Router();

const FILMS = [
    {
        id : 1,
        title: 'Furioza',
        duration: 139,
        budget: 2_000_000,
        link: 'https://www.imdb.com/title/tt10515864/'
    },
    {
        id : 2,
        title: 'Fight Club',
        duration: 139,
        budget: 63_000_000,
        link: 'https://www.imdb.com/title/tt0137523/'
    },
    {
        id : 3,
        title: 'Scarface',
        duration: 170,
        budget: 25_000_000,
        link: 'https://www.imdb.com/title/tt0086250/'
    }
]

router.get('/', (req, res, next) => {
    console.log('GET /films');
    res.json(FILMS);
});

module.exports = router;