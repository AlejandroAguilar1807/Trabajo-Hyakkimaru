import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Cuerpo } from '../models/Cuerpo';

@Injectable({
  providedIn: 'root'
})
export class CuerpoService {
  private urlEndPoint:string='http://localhost:8080/cuerpo/';
  private header = new HttpHeaders({'content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getCuerpos():Observable<Cuerpo[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Cuerpo[])
    );
  }

  create(cuerpo:Cuerpo):Observable<Cuerpo>{
    return this.http.post<Cuerpo>(this.urlEndPoint,
      cuerpo,{headers:this.header});
  }

  delete(id:number):Observable<Cuerpo>{
    return this.http.delete<Cuerpo>(this.urlEndPoint+id.toString(),
    {headers:this.header})
  }

  getCuerpo(id:number):Observable<Cuerpo>{
    return this.http.get<Cuerpo>(this.urlEndPoint+id.toString());
  }

  updateCuerpo(cuerpo:Cuerpo):Observable<Cuerpo>{
    return this.http.put<Cuerpo>(this.urlEndPoint+cuerpo.id.toString(),cuerpo,{headers:this.header});
  }
}
