import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/models/Articulo' 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css']
})
export class FormularioArticuloComponent implements OnInit {
  title:string = "Aquí puedes agregar los articulos de Dororo"
  articulo:Articulo;
  constructor(private articuloService:ArticuloService,
    private router:Router, private activate:ActivatedRoute) { this.articulo=new Articulo(0,'','')}

  ngOnInit(): void {
    this.cargarArticulo()
  }

  cargarArticulo():void{
    this.activate.params.subscribe(params =>{
      let id=params["id"];
      if(id){
        this.articuloService.getArticulo(id).subscribe(articulo=>this.articulo=articulo);
      }
    })
  }

  update():void{
    this.articuloService.updateArticulo(this.articulo).subscribe(
      response=>{
        Swal.fire({
          title: '¿Estás seguro que quieres arreglarl@?',
          showDenyButton: true,
          confirmButtonText: 'Arreglar',
          denyButtonText: `No, gracias`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('El articulo "'+ this.articulo.nombre+'" de Dororo ha sido arreglad@', '', 'success')
            this.router.navigate(['/articulo']);
          } else if (result.isDenied) {
            Swal.fire('No se han realizado arreglos a "' + this.articulo.nombre + '"', '', 'info')
            this.router.navigate(['/articulo']);
          }
        })
      }
    )
  }

  create():void{
    this.articuloService.create(this.articulo).subscribe(
      response=>{
        this.router.navigate(['/articulo'])
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El articulo "'+ this.articulo.nombre+'" de Dororo ha sido registrad@',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}
