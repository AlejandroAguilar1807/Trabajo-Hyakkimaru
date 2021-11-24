import { Component, OnInit } from '@angular/core';
import { DemonioService } from 'src/app/services/demonio.service';
import { Demonio } from 'src/app/models/Demonio';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demonio',
  templateUrl: './demonio.component.html',
  styleUrls: ['./demonio.component.css']
})
export class DemonioComponent implements OnInit {
  demonios:Demonio[];
  eliminarDemonio=true;
  eliminarDemonio2:Demonio;
  constructor(private demonioService:DemonioService, private router:Router) { this.demonios=[] }

  ngOnInit(): void {
    this.demonioService.getDemonios().subscribe(
      demonios=>{
        for(let d=0;d<demonios.length;d++){
          let actualDemonio:Demonio = demonios[d];
          if(!actualDemonio.derrotado){
            this.demonios.push(actualDemonio);
          }
        }
      }
    )
  }

  delete(demonio:Demonio):void{
    Swal.fire({
      title:'¿Estás segur@?',
      text:'!No podra reversar esta opcion¡',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, vencer'
    }).then((result) => {
      if(result.isConfirmed){
            Swal.fire({
              title: 'Registra la pelea antes que no se pueda registrar la derrota de "'+ demonio.nombre +'"',
              showDenyButton: true,
              confirmButtonText: 'Registrar',
              denyButtonText: 'No, gracias',
            }).then((result) => {
              if (result.isConfirmed) {
                this.demonios=this.demonios.filter(cli=> cli!==demonio)
              } else if (result.isDenied) {
                Swal.fire('Que lo insertes, no seas terc@', '', 'info')
                this.demonios=this.demonios.filter(cli=> cli!==demonio)
              }
              this.eliminarDemonio2=demonio;
              this.eliminarDemonio=false;
            })
      } 
    })
  }

  cambiarV($event:any):void{
    console.log($event);
    this.eliminarDemonio=true;
  }
}
