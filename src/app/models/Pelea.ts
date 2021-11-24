import { Demonio } from "./Demonio";

export class Pelea {
    id:number;
    lugar:string;
    ganador:string;
    demonio:Demonio;

    constructor(id:number, lugar:string, ganador:string, demonio:Demonio){
        this.id=id;
        this.lugar=lugar;
        this.ganador=ganador;
        this.demonio=demonio;        
    }
}