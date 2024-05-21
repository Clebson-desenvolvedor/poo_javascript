import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";

const personagemPedrino = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const personagens = [personagemPedrino, personagemJose];

new PersonagemView(personagens).render();

console.log(personagemJose.vida)