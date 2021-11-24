import { Component, OnInit } from '@angular/core';
import { PeleaService } from 'src/app/services/pelea.service';
import { Pelea } from 'src/app/models/Pelea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelea',
  templateUrl: './pelea.component.html',
  styleUrls: ['./pelea.component.css']
})
export class PeleaComponent implements OnInit {
  peleas:Pelea[];
  constructor(private peleaService:PeleaService) { this.peleas=[] }

  ngOnInit(): void {
    this.peleaService.getPeleas().subscribe(
      peleas=>this.peleas=peleas
    )
  }

  delete(pelea:Pelea):void{
    Swal.fire({
      title:'¿Está seguro?',
      text:'¡Se perdera el registro de esta pelea!',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, desaparecer registro'
    }).then((result) => {
      if(result.isConfirmed){
        this.peleaService.delete(pelea.id).subscribe(
            response=>{
            this.peleas=this.peleas.filter(cli=> cli!==pelea)
            Swal.fire(
              'Desaparecido',
              'La pelea contra '+ response.demonio.nombre +' ha sido eliminada',
              'success'
            )
          }
        )
      }
    })
  }
}
