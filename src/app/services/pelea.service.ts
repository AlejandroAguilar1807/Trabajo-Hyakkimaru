import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Pelea } from '../models/Pelea';

@Injectable({
  providedIn: 'root'
})
export class PeleaService {
  private urlEndPoint:string='http://localhost:8080/pelea/';
  private header = new HttpHeaders({'content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getPeleas():Observable<Pelea[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Pelea[])
    );
  }

  create(pelea:Pelea):Observable<Pelea>{
    return this.http.post<Pelea>(this.urlEndPoint,
      pelea,{headers:this.header});
  }

  delete(id:number):Observable<Pelea>{
    return this.http.delete<Pelea>(this.urlEndPoint+id.toString(),
    {headers:this.header})
  }

  getPelea(id:number):Observable<Pelea>{
    return this.http.get<Pelea>(this.urlEndPoint+id.toString());
  }

  updatePelea(pelea:Pelea):Observable<Pelea>{
    return this.http.put<Pelea>(this.urlEndPoint+pelea.id.toString(),pelea,{headers:this.header});
  }
}