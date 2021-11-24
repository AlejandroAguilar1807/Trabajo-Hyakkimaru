import { Cuerpo } from "./Cuerpo";

export class Demonio {
    id:number;
    nombre:string;
    lugar:string;
    foto:string;
    parteCuerpo:Cuerpo;
    derrotado:boolean;
    constructor(id:number, nombre:string,lugar:string, foto:string, parteCuerpo:Cuerpo, derrotado:boolean){
        this.id=id;
        this.nombre=nombre;
        this.lugar=lugar;
        this.foto=foto;
        this.parteCuerpo=parteCuerpo;
        this,derrotado=derrotado;
    }
}