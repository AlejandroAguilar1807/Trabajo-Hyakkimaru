import { Component, OnInit } from '@angular/core';
import { CuerpoService } from 'src/app/services/cuerpo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cuerpo } from 'src/app/models/Cuerpo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-cuerpo',
  templateUrl: './formulario-cuerpo.component.html',
  styleUrls: ['./formulario-cuerpo.component.css']
})
export class FormularioCuerpoComponent implements OnInit {
  title:string = "Aquí puedes agregar partes del cuerpo de Hyakkimaru"
  cuerpo:Cuerpo;
  constructor(private cuerpoService:CuerpoService,
    private router:Router, private activate:ActivatedRoute) { this.cuerpo=new Cuerpo(0,'')}

  ngOnInit(): void {
    this.cargarCuerpo()
  }

  cargarCuerpo():void{
    this.activate.params.subscribe(params =>{
      let id=params["id"];
      if(id){
        this.cuerpoService.getCuerpo(id).subscribe(cuerpo=>this.cuerpo=cuerpo);
      }
    })
  }

  update():void{
    this.cuerpoService.updateCuerpo(this.cuerpo).subscribe(
      response=>{
        Swal.fire({
          title: '¿Estás seguro que quieres modificarl@?',
          showDenyButton: true,
          confirmButtonText: 'Modificar',
          denyButtonText: `No, gracias`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('La parte del cuerpo de Hyakkimaru "'+this.cuerpo.nombre+'" ha sido modificad@', '', 'success')
            this.router.navigate(['/cuerpo']);
          } else if (result.isDenied) {
            Swal.fire('No se han realizado modificaciones a "' + this.cuerpo.nombre + '"', '', 'info')
            this.router.navigate(['/cuerpo']);
          }
        })
      }
    )
  }

  create():void{
    this.cuerpoService.create(this.cuerpo).subscribe(
      response => {
        this.router.navigate(['/cuerpo'])
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La parte del cuerpo de Hyakkimaru "' + this.cuerpo.nombre + '" ha sido registrad@',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}
