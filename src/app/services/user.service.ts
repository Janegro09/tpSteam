import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MisJuegos {
  id:number,
  idUser:number
  idJuegos:[number]
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:3000/misJuegos';

  constructor(private http: HttpClient) {}


    getGamesById(id: number): Observable<MisJuegos> {
      return this.http.get<MisJuegos>(`${this.apiUrl}/${id}`);
    }
    postMyGame(miJuegos: MisJuegos): Observable<MisJuegos> {
      return this.http.post<MisJuegos>(this.apiUrl, miJuegos);
    }

    deleteMyGame(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
