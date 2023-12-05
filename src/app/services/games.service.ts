import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Game {
  id:number,
  nombre: string,
  precio: number,
  img: string,
  genero: string,
  requerimientos:string
}

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor(private http:HttpClient) { 
    
  }

  getGames(){
    return this.http.get<Game>('http://localhost:3000/games')
  }

  getGamesById(id:number){
    return this.http.get<Game>('http://localhost:3000/games/'+id)
  }
}
  