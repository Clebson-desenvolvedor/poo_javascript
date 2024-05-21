import { PersonagemView } from "./components/personagem-view.js";
import { ArquiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7);
const arqueiroMagoChico = new ArquiroMago('Chico', 7, 10, 'Ar', 4, 8);
const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico];

new PersonagemView(personagens).render();
console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))