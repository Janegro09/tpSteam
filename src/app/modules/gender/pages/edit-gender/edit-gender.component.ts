import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-gender',
  templateUrl: './edit-gender.component.html',
  styleUrls: ['./edit-gender.component.css']
})
export class EditGenderComponent {

  // guardarDatos(e:any){
  //   e.preventDefault()
  //   console.log(e.target.form.gameName.value)
  // }

  @Input() titulo?:string = "Modificar de Generos";
  // titulo:string = "Crear Juego";
  habilitar:boolean = true;

  verInfo(){
    console.log("hola")
    this.habilitar = false
  }
}

