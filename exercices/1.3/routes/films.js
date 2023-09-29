var express = require('express');
const { listen } = require('../app');
var router = express.Router();

const FILMS = [
    {
        id : 1,
        title: 'Furioza',
        duration: 259,
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

router.get('/:id',(req,res) => {
    console.log(`GET /films/${req.params.id}`);

    const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmFound < 0) return res.sendStatus(404);

    res.json(FILMS[indexOfFilmFound]);
});

/*router.get('/',(req,res,next) => {
    const orderByDuration = 
        req?.query['minimum-duration']? req.query['minimum-duration']: undefined;

    let orderedFilm;

    if(orderByDuration){
        orderedFilm = [...FILMS].filter(film => film.duration >= orderByDuration);
    }

    console.log('GET /films');
    res.json(orderByDuration ?? FILMS); 

});*/

router.get('/', (req, res, next) => {

    const orderByDuration = req?.query['minimum-duration']? req.query['minimum-duration']: undefined;

    let orderedFILMS;
    if(orderByDuration){
      orderedFILMS = [...FILMS].filter(film => film.duration > orderByDuration);
    }

    console.log("GET /films");
    res.json(orderedFILMS ?? FILMS);
    
});

router.post('/', (req, res, next) => {
        const id = (FILMS[FILMS.length - 1].id + 1);
        const title = req.body.title;
        const duration = req.body.duration;
        const budget = req.body.budget;
        const link = req.body.link;

        const newFilm = {
            id,
            title,
            duration,
            budget,
            link
        }
        FILMS.push(newFilm)
        res.json(newFilm);
});

module.exports = router;