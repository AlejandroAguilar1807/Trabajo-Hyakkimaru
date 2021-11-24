import { Component, Input, OnInit } from '@angular/core';
import { DemonioService } from 'src/app/services/demonio.service';
import { CuerpoService } from 'src/app/services/cuerpo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Demonio } from 'src/app/models/Demonio';
import { Cuerpo } from 'src/app/models/Cuerpo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-demonio',
  templateUrl: './formulario-demonio.component.html',
  styleUrls: ['./formulario-demonio.component.css']
})
export class FormularioDemonioComponent implements OnInit {
  title:string = "Aquí puedes agregar demonios"
  demonio:Demonio;
  public cuerpos:Cuerpo[];
  constructor(private demonioService:DemonioService, private cuerpoService:CuerpoService,
    private router:Router, private activate:ActivatedRoute) { this.demonio=new Demonio(0,'','','',new Cuerpo(0,''),false),this.cuerpos=[]}

  ngOnInit(): void {
    this.cargarDemonio()
    this.cuerpoService.getCuerpos().subscribe(cuerpos=>this.cuerpos=cuerpos);
  }

  cargarDemonio():void{
    this.activate.params.subscribe(params =>{
      let id=params["id"];
      if(id){
        this.demonioService.getDemonio(id).subscribe(demonio=>this.demonio=demonio);
      }
    })
  }

  update():void{
    this.demonioService.updateDemonio(this.demonio).subscribe(
      response=>{
        Swal.fire({
          title: '¿Estás seguro que quieres modificarl@?',
          showDenyButton: true,
          confirmButtonText: 'Modificar',
          denyButtonText: `No, gracias`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('El demonio "'+ this.demonio.nombre+'" ha sido modificad@', '', 'success')
            this.router.navigate(['/demonio']);
          } else if (result.isDenied) {
            Swal.fire('No se han realizado modificaciones a "' + this.demonio.nombre + '"', '', 'info')
            this.router.navigate(['/demonio']);
          }
        })
      }
    )
  }

  create():void{
    this.demonioService.create(this.demonio).subscribe(
      response=>{
        Swal.fire({
          title: 'Deberias ir a registrar la victoria del demonio "'+ this.demonio.nombre +'"',
          showDenyButton: true,
          confirmButtonText: 'Registrar',
          denyButtonText: 'No, gracias',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/formPelea']);
          } else if (result.isDenied) {
            Swal.fire('Que lo insertes, no seas terc@', '', 'info')
            this.router.navigate(['/formPelea']);
          }
        })
      }
    );
  }

  elegirCuerpo(cuerpo:Cuerpo):void{
    this.demonio.parteCuerpo=cuerpo;
  }
}
