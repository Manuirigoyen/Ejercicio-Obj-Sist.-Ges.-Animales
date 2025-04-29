import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal {
  protected name: string;

  constructor(pName: string) {
    this.name = pName;
  }

  moverse(): void {
    console.log(`${this.name} se mueve...`);
  }

  abstract emitirSonido(): void;

  abstract tipoDeDieta(): void;
}
