import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Demonio } from '../models/Demonio';

@Injectable({
  providedIn: 'root'
})
export class DemonioService {
  private urlEndPoint:string='http://localhost:8080/demonio/';
  private header = new HttpHeaders({'content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getDemonios():Observable<Demonio[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Demonio[])
    );
  }

  create(demonio:Demonio):Observable<Demonio>{
    return this.http.post<Demonio>(this.urlEndPoint,
      demonio,{headers:this.header});
  }

  delete(id:number):Observable<Demonio>{
    return this.http.delete<Demonio>(this.urlEndPoint+id.toString(),
    {headers:this.header})
  }

  getDemonio(id:number):Observable<Demonio>{
    return this.http.get<Demonio>(this.urlEndPoint+id.toString());
  }

  updateDemonio(demonio:Demonio):Observable<Demonio>{
    return this.http.put<Demonio>(this.urlEndPoint+demonio.id.toString(),demonio,{headers:this.header});
  }
}
