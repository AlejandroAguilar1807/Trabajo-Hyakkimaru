import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/models/Articulo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Articulo[];
  constructor(private articuloService:ArticuloService) { this.articulos=[] }

  ngOnInit(): void {
    this.articuloService.getArticulos().subscribe(
      articulos=>this.articulos=articulos
    )
  }

  delete(articulo:Articulo):void{
    Swal.fire({
      title:'¿Estás segur@?',
      text:'!No podra reversar esta opcion¡',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, destruir'
    }).then((result) => {
      if(result.isConfirmed){
        this.articuloService.delete(articulo.id).subscribe(
            response=>{
            this.articulos=this.articulos.filter(cli=> cli!==articulo)
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
