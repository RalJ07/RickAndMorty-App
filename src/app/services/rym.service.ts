import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, RymResponse } from '../interfaces/rym.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  characters: Character[] = []

  randomPages: number = Math.random();

  private baseUrl: string = 'https://rickandmortyapi.com/api';

  private results$ = new BehaviorSubject<Character[]>(this.characters);

  constructor(private http: HttpClient) { }

  
  get characterFiltered$(): Observable<Character[]> {
    return this.results$.asObservable()
  }
  
  addResults( character: any) {
    this.results$.next( character );
  }

  searchByName(query: string): Observable<RymResponse> {
    return this.http.get<RymResponse>(`${this.baseUrl}/character/?name=${query}`);
  }

  searchRandom() {
    return this.http.get<RymResponse>(`${this.baseUrl}/character/?page=${this.obtenerNumeroAleatorio()}`)
  }

 

  obtenerNumeroAleatorio(min:number = 1, max:number = 5) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
