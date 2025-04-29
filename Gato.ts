import { Animal } from "./Animal";

export class Gato extends Animal {
  constructor(pName: string) {
    super(pName);
  }

  emitirSonido(): void {
    console.log("¡Miau!");
  }

  tipoDeDieta(): void {
    console.log("El gato es carnívoro.");
  }
}
