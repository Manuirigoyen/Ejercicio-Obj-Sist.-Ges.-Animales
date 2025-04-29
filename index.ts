import { Perro } from "./Perro";
import { Gato } from "./Gato";

let miPerro = new Perro("Firulais");
let miGato = new Gato("Lili");

//Prueba perro::
miPerro.emitirSonido();   
miPerro.moverse();        
miPerro.tipoDeDieta();   

//Prueba gato::
miGato.emitirSonido();    
miGato.moverse();        
miGato.tipoDeDieta();     
