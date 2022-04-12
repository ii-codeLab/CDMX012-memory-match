
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import pokemon from '../data/pokemon/pokemon.js';
 import { doubleData, fisherYatesShuffle } from './double&random.js';

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

/*const App = () => {--------------------------
  const el = document.createElement('img');

  el.className = 'App';
  el.Content = 'Hola mundo!';         EJEMPLO DE FLUJO

  return el;
};

export default App;------------------------------
*/

  const pokemonContent = () => {
    const boardContainer = document.createElement("section");
          boardContainer.className = "boardContainer";

    //-----------------VARIABLES ARREGLO POKEMON---------------//
    const infoPokemon = pokemon.items;

    //-----------------DUPLICANDO IMÁGENES---------------//
    const doublePokemon = doubleData(infoPokemon);

    //-----------------BARAJEANDO IMÁGENES---------------//
    fisherYatesShuffle(doublePokemon);
    

    //-----------------CREANDO LAS TARJETAS---------------//
    function templeateCard(data){
      let cardContainer = document.createElement("section");
      let frontCard = document.createElement("section");  
      let pokemonImage = document.createElement("img");
      let backCard = document.createElement("section")
      let line = document.createElement("section")
      let circle = document.createElement("section")
      
      cardContainer.className = "cardContainer";
      frontCard.className = "frontCard";
      pokemonImage.className = "pokemonImage";
      backCard.className = "backCard";
      line.className = "line"; 
      circle.className = "circle";


      cardContainer.setAttribute("name", data.id);
      pokemonImage.src = data.image;
      pokemonImage.alt = data.id;


      boardContainer.appendChild(cardContainer);
      cardContainer.appendChild(frontCard);
      cardContainer.appendChild(backCard);
      frontCard.appendChild(pokemonImage);
      backCard.appendChild(line);
      backCard.appendChild(circle);
      
      cardContainer.addEventListener('click', function (e){
          backCard.classList.add("hideCardContainer");
          //console.log(e);
          const clickedCard = e.target;
          clickedCard.classList.add("showed");
          const showedCards = document.querySelectorAll(".showed");
          //cardContainer.appendChild(showedCards);
          //console.log(flippedCards);
      
          if(showedCards.length === 2){
            if(
              showedCards[0].getAttribute("alt") === 
              showedCards[1].getAttribute("alt")
            ){
              console.log("match");
              showedCards.forEach((card) => {
                card.classList.remove("showed");
                card.style.pointerEvents = "none";
              })
            }else{
              console.log("wrong");
              showedCards.forEach((card) => {
                card.classList.remove("showed");
                setTimeout(() => backCard.classList.remove("hideCardContainer"), 1000);
                console.log(backCard);
              })
            }
          
        };  
      })
    }

 /* const hideBackCard = (card) => {
      card.style.display = "none";
    }
  
    const showedBackCard = (card) => {
      card.style.display = "";
    }*/

  doublePokemon.forEach(templeateCard);
  //----------------- REVISANDO TARJETAS ---------------//
  

return boardContainer;
} 

export {pokemonContent}