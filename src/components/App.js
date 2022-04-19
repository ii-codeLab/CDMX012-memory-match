
 import pokemon from '../data/pokemon/pokemon.js';
 import { doubleData, fisherYatesShuffle } from './double&random.js';

//-----------------CREACIÓN DE TABLERO Y CONTENIDO---------------//
  const pokemonContent = (principalContainer) => {
    const boardContainer = document.createElement("section");
          boardContainer.className = "boardContainer";

    //-----------------VARIABLES ARREGLO POKEMON---------------//
    const infoPokemon = pokemon.items;

    //-----------------DUPLICANDO IMÁGENES---------------//
    const doublePokemon = doubleData(infoPokemon);

    //-----------------BARAJEANDO IMÁGENES---------------//
    fisherYatesShuffle(doublePokemon);
    
    let clickedCards = [];
    let countingCards = [];

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
      backCard.setAttribute("name", data.id);
      pokemonImage.src = data.image;
      pokemonImage.alt = data.id;


      boardContainer.appendChild(cardContainer);
      cardContainer.appendChild(frontCard);
      cardContainer.appendChild(backCard);
      frontCard.appendChild(pokemonImage);
      backCard.appendChild(line);
      backCard.appendChild(circle);
      
      //Definir variable para introducir las tarjetas "clickeadas"
      //Agregar evento de "click"
      //Detectar cuando se dé "click" en la primer carta
      //Destapar carta 
      //Enviarla a la variable 
      //Hacer lo mismo para la segunda
      //Comparar las 2 cartas dentro de la variable
      //Si son iguales hacer que permanezcan descubiertas
      //Y permitir destapar otras 2
      //Si son diferentes volver a cubrir
      //Y permitir destapar otras 2
      //Cuando todas las tarjetas estén descubiertas lanzar aviso: ¡Felicidades!


      backCard.addEventListener('click',()=>{
        backCard.style.display = "none";
        countingCards.push(frontCard);
        console.log(frontCard);
        clickedCards.push(backCard); 
        
      //----------------- COMPARANDO TARJETAS ---------------//
        if(clickedCards.length === 2){
          if(clickedCards[0].getAttribute("name") === clickedCards[1].getAttribute("name")){
          }else{
            clickedCards.forEach( (card) => {
              setTimeout(() => card.style.display = "", 1000);
            })
          }
          clickedCards = [];
      }
          
      });
    }
  doublePokemon.forEach(templeateCard);
return boardContainer;
} 

export {pokemonContent}