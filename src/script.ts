import { cachorro } from "./cachorro";
import { cavalo } from "./cavalo";
import { Three_toed } from "./elepula";
import { emitirsom } from "./emitirsom";

const cachorro = new cachorro ('Loki', 3, true);
const cavalo = new cavalo ('cavalo', 8, true);
const three_toed = new Three_toed ('Preguiça', 6, true)

function emitSound(animal: emitirsom) {
    animal.emmitSound();
}

emitSound(cavalo);
emitSound(cachorro);
emitSound(three_toed);