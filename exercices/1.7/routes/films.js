var express = require('express');
const { serialize, parse } = require('../utils/json');
var router = express.Router();

const jsonDbPath = __dirname + '/../data/films.json';

const FILMS = [
    {
        id : 1,
        title: 'Furioza',
        duration: 259,
        budget: 2_000_000,
        link: 'https://www.imdb.com/'
    },
    {
        id : 2,
        title: 'Fight Club',
        duration: 139,
        budget: 63_000_000,
        link: 'https://www.imdb.com/'
    },
    {
        id : 3,
        title: 'Scarface',
        duration: 170,
        budget: 25_000_000,
        link: 'https://www.imdb.com/'
    },
    {
        id : 4,
        title: 'Keyvan L"explorateur',
        duration: 170,
        budget: 25_000_000,
        link: 'https://www.imdb.com/'
    }
]

router.get('/', (req, res, next) => {

    const orderByDuration = req?.query['minimum-duration']? req.query['minimum-duration']: undefined;

    const films = parse(jsonDbPath,FILMS);

    let orderedFILMS;

    if(orderByDuration){
      orderedFILMS = [...films].filter(films => films.duration > orderByDuration);
    }

    console.log("GET /films");
    res.json(orderedFILMS ?? films);
});

router.get('/:id',(req,res) => {
    console.log(`GET /films/${req.params.id}`);

    const films = parse(jsonDbPath,FILMS);

    const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmFound < 0) return res.sendStatus(404);

    res.json(films[indexOfFilmFound]);
});

router.post('/', (req, res, next) => {

        const films = parse(jsonDbPath,FILMS);

        const id = (films[films.length - 1].id + 1);
        const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
        const duration = req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
        const budget = req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
        const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

        if (!title || !duration || !budget || !link) return res.sendStatus(400); // error code '400 Bad request'

        const newFilm = {
            id,
            title,
            duration,
            budget,
            link
        }
        
        const filmFound = films.find((film) => film.title === newFilm.title);
        
        if(filmFound){
           return res.sendStatus(409); // error code '409 Bad request' 
        }

        films.push(newFilm);
        serialize(jsonDbPath, films);
        res.json(newFilm);
});

router.delete('/:id', (req, res) => {
    console.log(`DELETE /films/${req.params.id}`);

    const films = parse(jsonDbPath,FILMS);

    const indexOfFilmFound = films.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmFound < 0) return res.sendStatus(404);

    const itemsRemovedFromFilms = films.splice(indexOfFilmFound, 1);
    const itemRemoved = itemsRemovedFromFilms[0];

    serialize(jsonDbPath, films);

    res.json(itemRemoved);
});

// Update a pizza based on its id and new values for its parameters
router.patch('/:id', (req, res) => {
    console.log(`PATCH /films/${req.params.id}`);
    
    const title = req?.body?.title;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;        
    const link = req?.body?.link;
  
    console.log('POST /films');

    if ((!title && !duration && !budget && !link) || title?.length === 0 || 
    duration?.length === 0 || budget?.length === 0 || link?.length === 0) return res.sendStatus(400);

    const films = parse(jsonDbPath,FILMS);
  
    const foundIndex = films.findIndex(film => film.id == req.params.id);
  
    if (foundIndex < 0) return res.sendStatus(404);
  
    const updatedFilm = {...films[foundIndex], ...req.body};
  
    films[foundIndex] = updatedFilm;

    serialize(jsonDbPath, films);
  
    res.json(updatedFilm);
});

router.put('/:id', (req, res) => {
    console.log(`PUT /films/${req.params.id}`);
    const id = req.params.id;
    const title = req?.body?.title;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;        
    const link = req?.body?.link;
  
    console.log('POST /films');
  
    if ((!title && !duration && !budget && !link) || title?.length === 0 || 
    duration?.length === 0 || budget?.length === 0 || link?.length === 0) return res.sendStatus(400);

    const films = parse(jsonDbPath,FILMS);

    if(id > films.length){

        const newFilm = {
            id,
            title,
            duration,
            budget,
            link
        };

        const filmFound = films.find((film) => film.title === newFilm.title);

        if(filmFound){
           return res.sendStatus(409); // error code '409 Bad request' 
        };

        films.push(newFilm);
        return res.json(newFilm);
    };

    const foundIndex = films.findIndex(film => film.id == req.params.id);

    if (foundIndex < 0) return res.sendStatus(404);

    const updatedFilm = {...films[foundIndex],...req.body};
    films[foundIndex] = updatedFilm;

    serialize(jsonDbPath, films);

    res.json(updatedFilm);
});
  

module.exports = router;