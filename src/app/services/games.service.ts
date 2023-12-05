import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost:3000/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGamesById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  postGames(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  putGames(game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${game.id}`, game);
  }

  deleteGames(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}