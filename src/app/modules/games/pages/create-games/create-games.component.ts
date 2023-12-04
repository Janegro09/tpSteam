import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-create-games',
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.css']
})
export class CreateGamesComponent {


  // guardarDatos(e:any){
  //   e.preventDefault()
  //   console.log(e.target.form.gameName.value)
  // }

  @Input() titulo?:string = "Alta de Juegos";
  // titulo:string = "Crear Juego";
  habilitar:boolean = true;

  verInfo(){
    console.log("hola")
    this.habilitar = false
  }
}
