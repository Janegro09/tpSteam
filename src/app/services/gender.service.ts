import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Attribute {
  nameAtt: string;
}
interface Gender {
  map: any; //quickfix
  id: number;
  nombre: string;
  atributos: Attribute[];
}

@Injectable({
  providedIn: 'root'
})

export class GenderService {
  private apiUrl = 'http://localhost:3000/gender';

  constructor(private http:HttpClient) { 
    
  }

  getGender(){
    return this.http.get<Gender>(this.apiUrl)
  }

  getGenderById(id:number){
    return this.http.get<Gender>(`${this.apiUrl}/${id}`)
  }

  postGender(gender: Gender): Observable<Gender> {
    return this.http.post<Gender>(this.apiUrl, gender);
  }

  
  putGender(gender: Gender): Observable<Gender> {
    return this.http.put<Gender>(`${this.apiUrl}/${gender.id}`, gender);
  }

  deleteGender(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
  