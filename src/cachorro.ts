import { animal } from "./animais";
import { ICanRun } from "./elecorre"
import { emitirsom } from "./emitirsom";

class cachorro extends animal implements ICanRun {
    public canRun: boolean;

    constructor (name: string, age: number, canRun: boolean) {
        super(name, age)
        this.canRun = canRun;
    }

    public emmitSound(): void {
        console.log(`${this.name} AU!`);
    }

    public run(): void {
        console.log(`${this.name} começouacorrer!`);
    }
}

export { cachorro };