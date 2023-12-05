import { Component, Input } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { GenderService } from 'src/app/services/gender.service';

interface Gender {
  id:number,
  nombre: string,
  precio: number,
  img: string,
  genero: string,
  requerimientos:string
}

@Component({
  selector: 'app-games-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})


export class GamesListComponent {
  genders:any = [];  

  @Input() titulo:string = "Listado de Generos"
  constructor(private genderService:GenderService){
    this.genderService.getGender().subscribe(data => {
      this.genders = data;
    })
  }

}