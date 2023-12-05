import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css']
})
export class CreateGenderComponent {

  // guardarDatos(e:any){
  //   e.preventDefault()
  //   console.log(e.target.form.gameName.value)
  // }

  @Input() titulo?:string = "Alta de Generos";
  // titulo:string = "Crear Juego";
  habilitar:boolean = true;

  verInfo(){
    console.log("hola")
    this.habilitar = false
  }
}
