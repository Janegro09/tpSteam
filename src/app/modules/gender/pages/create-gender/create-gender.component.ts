import { Component, Input, ViewChild } from '@angular/core';
import { GenderFormComponent } from '../../components/gender-form/gender-form.component';
import { GenderService } from 'src/app/services/gender.service';

interface Attribute {
  nameAtt: string;
}
interface Gender {
  map: any; //quickfix
  id: number;
  nombre: string;
  atributos: Attribute[];
}


@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css']
})
export class CreateGenderComponent {
  @ViewChild(GenderFormComponent) genderFormComponent!: GenderFormComponent;
  habilitar:boolean = true;
  id=0;

    
    @Input() titulo?:string = "Alta de Generos";
    // titulo:string = "Crear Juego";

    constructor(private _genderServices: GenderService){
      this.id = this._genderServices.getGender.length;
    }

  verInfo(){
    this.habilitar = false
  }
  guardar(){

    const genderValues:Gender = {
      id: this.id,
      nombre: this.genderFormComponent.genderForm.value.nameGender || '',
      atributos: this.genderFormComponent.genderForm.value.genders || [],
      map: undefined
    }


    this._genderServices.postGender(genderValues).subscribe(e => {
      alert('Agregado bien')
      console.log(e);
    })
  }
  
}
