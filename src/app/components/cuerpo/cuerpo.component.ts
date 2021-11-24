import { Component, OnInit } from '@angular/core';
import { CuerpoService } from 'src/app/services/cuerpo.service';
import { Cuerpo } from 'src/app/models/Cuerpo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  cuerpos:Cuerpo[];
  constructor(private cuerpoService:CuerpoService) { this.cuerpos=[] }

  ngOnInit(): void {
    this.cuerpoService.getCuerpos().subscribe(
      cuerpos=>this.cuerpos=cuerpos
    )
  }

  delete(cuerpo:Cuerpo):void{
    Swal.fire({
      title:'¿Estás segur@?',
      text:'!No podras reversar esta opcion¡',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, destuir'
    }).then((result) => {
      if(result.isConfirmed){
        this.cuerpoService.delete(cuerpo.id).subscribe(
            response=>{
            this.cuerpos=this.cuerpos.filter(cli=> cli!==cuerpo)
            Swal.fire(
              'Destruid@',
              response.nombre + ' ha sido destruid@',
              'success'
            )
          }
        )
      } 
    })
  }
}
