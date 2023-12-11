import { Component, Input, ViewChild } from '@angular/core';
import { GenderFormComponent } from '../../components/gender-form/gender-form.component';
import { GamesFormComponent } from 'src/app/modules/games/components/games-form/games-form.component';

@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css']
})
export class CreateGenderComponent {
  @ViewChild(GenderFormComponent) gamesFormComponent!: GamesFormComponent;

  // guardarDatos(e:any){
  //   e.preventDefault()
  //   console.log(e.target.form.gameName.value)
  // }

  @Input() titulo?:string = "Alta de Generos";
  // titulo:string = "Crear Juego";
  habilitar:boolean = true;

  verInfo(){
    console.log(this.gamesFormComponent)
    this.habilitar = false
  }
}
