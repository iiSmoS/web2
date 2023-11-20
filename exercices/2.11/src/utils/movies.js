const MOVIES = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      duration: 152,
      budget: 125000000,
      link: 'https://www.example.com/harry-potter',
    },
    {
      id: 2,
      title: 'Star Wars: Episode IV - A New Hope',
      duration: 121,
      budget: 11000000,
      link: 'https://www.example.com/star-wars',
    },
    {
      id: 3,
      title: 'Inception',
      duration: 148,
      budget: 160000000,
      link: 'https://www.example.com/inception',
    },
    {
      id: 4,
      title: 'Jurassic Park',
      duration: 127,
      budget: 63000000,
      link: 'https://www.example.com/jurassic-park',
    },
    {
      id: 5,
      title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      duration: 143,
      budget: 140000000,
      link: 'https://www.example.com/pirates-caribbean',
    },
    {
      id: 6,
      title: 'The Avengers: Age of Ultron',
      duration: 141,
      budget: 250000000,
      link: 'https://www.example.com/avengers-age-of-ultron',
    },
    {
      id: 7,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      duration: 178,
      budget: 93000000,
      link: 'https://www.example.com/lord-of-the-rings',
    },
    {
      id: 8,
      title: 'The Matrix',
      duration: 136,
      budget: 63000000,
      link: 'https://www.example.com/the-matrix',
    },
    {
      id: 9,
      title: 'E.T. the Extra-Terrestrial',
      duration: 115,
      budget: 10500000,
      link: 'https://www.example.com/et',
    },
    {
      id: 10,
      title: 'Inception',
      duration: 148,
      budget: 160000000,
      link: 'https://www.example.com/inception',
    }
  ];
  
function readAllMovie() {
    return MOVIES;
}

function addOneMovie(id,title,duration,budget){
    const newId = MOVIES.length + 1;

    const newMovie = {
        id : newId,
        title,
        duration,
        budget,
    }

    MOVIES.push(newMovie);
}

module.exports = {readAllMovie,addOneMovie}