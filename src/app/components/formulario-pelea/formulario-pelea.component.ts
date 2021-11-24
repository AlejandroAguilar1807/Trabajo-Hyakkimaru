import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DemonioService } from 'src/app/services/demonio.service';
import { PeleaService } from 'src/app/services/pelea.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Demonio } from 'src/app/models/Demonio';
import { Pelea } from 'src/app/models/Pelea';
import Swal from 'sweetalert2';
import { Cuerpo } from 'src/app/models/Cuerpo';

@Component({
  selector: 'app-formulario-pelea',
  templateUrl: './formulario-pelea.component.html',
  styleUrls: ['./formulario-pelea.component.css']
})
export class FormularioPeleaComponent implements OnInit {
  title:string = "Aquí puedes registrar una pelea"
  pelea:Pelea;
  public demonios:Demonio[];
  @Input() eliminarDemonio:Demonio;
  @Output() salida=new EventEmitter<string>();
  constructor(private peleaService:PeleaService, private demonioService:DemonioService,
    private router:Router, private activate:ActivatedRoute) { this.pelea=new Pelea(0,'','',new Demonio(0,'','','',new Cuerpo(0,''),false)),this.demonios=[]}

  ngOnInit(): void {
    this.cargarPelea()
    this.demonioService.getDemonios().subscribe(demonios=>{
      this.demonios=demonios
      console.log(this.demonios);
    });
  }

  cargarPelea():void{
    this.activate.params.subscribe(params =>{
      let id=params["id"];
      if(id){
        this.peleaService.getPelea(id).subscribe(pelea=>this.pelea=pelea);
      }
    })
  }

  update():void{
    this.peleaService.updatePelea(this.pelea).subscribe(
      response=>{
        Swal.fire({
          title: '¿Estás seguro que quieres modificar la pelea?',
          showDenyButton: true,
          confirmButtonText: 'Modificar',
          denyButtonText: `Cancel`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('La pelea con '+  this.pelea.demonio.nombre +' ha sido modificada', '', 'success')
            this.router.navigate(['/pelea']);
          } else if (result.isDenied) {
            Swal.fire('No se han realizado cambios', '', 'info')
            this.router.navigate(['/pelea']);
          }
        })
      }
    )
  }

  create():void{
    this.peleaService.create(this.pelea).subscribe(
      response=>{
        if(this.eliminarDemonio){
          this.eliminarDemonio.derrotado=true;
          this.demonioService.updateDemonio(this.eliminarDemonio).subscribe(
            (response)=>{
              this.salida.emit("Demonio eliminado");
            }
          )
        }
        this.router.navigate(['/pelea'])
        Swal.fire('La pelea contra "'+ this.pelea.demonio.nombre +'" ha sido registrad@');
        if(this.eliminarDemonio){
          Swal.fire('El demonio "'+ this.eliminarDemonio.nombre +'" ha sido derrotad@');
        }
      }
    );
  }

  elegirDemonio(demonio:Demonio):void{
    this.pelea.demonio=demonio;
  }
}
