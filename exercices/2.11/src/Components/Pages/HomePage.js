import rockyImg from '../../img/rocky.png';
import scarfaceImg from '../../img/Scarface.jpg';

const HomePage = () => {
  const main = document.querySelector('main');

  main.innerHTML = `
  <div class="background-image">
    
        <div class="title"><h1>myMovies</h1></div>
        <div class="container">
          <div class="film">
            <img src="${scarfaceImg}">
            <h1>Scarface</h1>
            <p>Date de sortie : 7 mars 1984</p>
            <p>Durée: 2h 45min</p>
            <p>Acteurs principales: Al Pacino, Michelle Pfeiffer, Steven Bauer</p>
          </div>
  
          <div class="film">
            <img src="${rockyImg}">
            <h1>Rocky I</h1>
            <p>Date de sortie : 21 novembre 1976</p>
            <p>Durée: 1h 59min</p>
            <p>Acteurs principales: Sylvester Stallone, Talia Shire, Burt Young</p>
          </div>
        </div>
      </div>
  `;
};

export default HomePage;
