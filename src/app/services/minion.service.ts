import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Minion } from '../interfaces/Minion';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  constructor(private http: HttpClient) { }

  url : string = "http://localhost:3000/minions";

  getMinions():Observable<Minion[]>{
    return this.http.get<Minion[]>(this.url);
  }

  getMinionsByName(name:string):Observable<Minion[]>{
    return this.http.get<Minion[]>(`${this.url}?name=${name}`)
  }

  getMinionsById(id:string):Observable<Minion>{
    return this.http.get<Minion>(`${this.url}/${id}`)
  }

  addMinion(minion:Minion):Observable<Minion>{
    return this.http.post<Minion>(this.url,minion);
  }
  
  editMinion(minion:Minion):Observable<Minion>{
    return this.http.put<Minion>(`${this.url}/${minion.id}`,minion);
  }

  deleteMinion(id:string):Observable<Minion>{
    return this.http.delete<Minion>(`${this.url}/${id}`);
  }
  
}
