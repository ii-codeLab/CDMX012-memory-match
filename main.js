//import App from './components/App.js'; EJEMPLO DE FLUJO
//import {} from './components/App.js';
import {pokemonContent} from './components/App.js'


//document.getElementById('root').appendChild(App()); EJEMPLO DE FLUJO


const principalContainer = document.querySelector('.principalContainer')
principalContainer.appendChild(pokemonContent());
