import { Animal } from "./Animal";

export class Perro extends Animal {
  constructor(pName: string) {
    super(pName);
  }

  emitirSonido(): void {
    console.log("¡Guof!");
  }

  tipoDeDieta(): void {
    console.log("El perro es omnívoro.");
  }
}
