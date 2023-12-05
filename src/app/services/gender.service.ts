import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Game {
  id:number,
  nombre: string,
  atributos: string[]
}

@Injectable({
  providedIn: 'root'
})

export class GenderService {

  constructor(private http:HttpClient) { 
    
  }

  getGender(){
    return this.http.get<Game>('http://localhost:3000/gender')
  }

  getGenderById(id:number){
    return this.http.get<Game>('http://localhost:3000/gender/'+id)
  }
}
  