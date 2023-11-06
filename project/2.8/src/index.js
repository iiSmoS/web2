import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import Rocky from './img/fightClub.jpg';
import Scarface from './img/Scarface.jpg';

const containerWrapper = document.querySelector('.container');

function createRow(){

  const newRow = document.createElement('div');
  newRow.className = 'row';

  containerWrapper.appendChild(newRow);

  return newRow;
}

function createTitle(){
  const row = createRow();
  row.className ='row text-center';

  const divCol = document.createElement('div');

  divCol.className = 'col';
  row.appendChild(divCol);  

  const title = document.createElement('h1');
  title.innerText = 'myMovies';

  divCol.appendChild(title);
}

function createImage(src){
  const image = document.createElement('img');
  
  image.src = src;

  return image;
}

function createCard(title, src, description){
  const row = createRow();

  const rowCol1 = document.createElement('div');
  rowCol1.className = 'col';
  row.appendChild(rowCol1);

  const card = document.createElement('div');

  card.className = 'card';
  rowCol1.appendChild(card);

  const cardRow = document.createElement('div');

  cardRow.className = 'row';
  card.appendChild(cardRow);

  const rowColImage = document.createElement('div');

  rowColImage.className = 'col-md-auto';
  cardRow.appendChild(rowColImage);

  const image = createImage(src);

  image.height = 300;
  image.width = 230;
  rowColImage.appendChild(image);

  const cardRowCol2 = document.createElement('div');

  cardRowCol2.className = 'col';

  cardRow.appendChild(cardRowCol2);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardRowCol2.appendChild(cardBody);

  const cardTitle1 = document.createElement('h1'); 
  cardTitle1.className = 'card-title';
  cardTitle1.innerText = title;
  cardBody.appendChild(cardTitle1);

  const cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.innerText = description;
  cardBody.appendChild(cardText);


}

const rockyTitle = "Rocky I";
const rockyText = "Date de sortie : 21 novembre 1976 \nDurée: 1h 59min\nActeurs principales: Sylvester Stallone, Talia Shire, Burt Young";

const scarfaceTitle = "Scarface"
const scarfaceText = "Date de sortie : 7 mars 1984\nDurée: 2h 45min\nActeurs principales: Al Pacino, Michelle Pfeiffer, Steven Bauer";

createTitle();

createCard(scarfaceTitle,Scarface,scarfaceText);
createCard(rockyTitle,Rocky,rockyText);


