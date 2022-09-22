import { animal } from "./animais";
import { ICanRun } from "./elecorre";
import { emitirsom } from "./emitirsom";

class Horse extends animal implements ICanRun, emitirsom {
    public canRun: boolean;

    constructor (name: string, age: number, canRun: boolean) {
        super(name, age)
        this.canRun = canRun;
    }

    public emmitSound(): void {
        console.log(`${this.name} neigh!`);
    }
    
    public run(): void {
        console.log(`${this.name} starts to run!`);
    }
}

export { Horse };