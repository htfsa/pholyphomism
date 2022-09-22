import { animal } from "./animais";
import { IClimbTrees } from "./iClimbTrees";
import { emitirsom } from "./emitirsom";


class Three_toed extends animal implements IClimbTrees {
    public climbTrees: boolean;

    constructor (name: string, age: number, climbTrees: boolean) {
        super(name, age)
        this.climbTrees = climbTrees;
    }

    public emmitSound(): void {
        console.log(`${this.name} laaaaazy!`);
    }
    
    public climb_Trees (): void {
        console.log(`${this.name} starts to climb trees!`);
    }
}

export { Three_toed };