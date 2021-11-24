import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Articulo } from '../models/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private urlEndPoint:string='http://localhost:8080/articulo/';
  private header = new HttpHeaders({'content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getArticulos():Observable<Articulo[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Articulo[])
    );
  }

  create(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.urlEndPoint,
      articulo,{headers:this.header});
  }

  delete(id:number):Observable<Articulo>{
    return this.http.delete<Articulo>(this.urlEndPoint+id.toString(),
    {headers:this.header})
  }

  getArticulo(id:number):Observable<Articulo>{
    return this.http.get<Articulo>(this.urlEndPoint+id.toString());
  }

  updateArticulo(articulo:Articulo):Observable<Articulo>{
    return this.http.put<Articulo>(this.urlEndPoint+articulo.id.toString(),articulo,{headers:this.header});
  }
}
