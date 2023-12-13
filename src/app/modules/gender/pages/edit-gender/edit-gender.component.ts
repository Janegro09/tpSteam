import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenderService } from 'src/app/services/gender.service';
import { GenderFormComponent } from '../../components/gender-form/gender-form.component';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

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
  selector: 'app-edit-gender',
  templateUrl: './edit-gender.component.html',
  styleUrls: ['./edit-gender.component.css']
})
export class EditGenderComponent {

  @Input() titulo?:string = "Modificar Generos";
  @ViewChild(GenderFormComponent) genderFormComponent!: GenderFormComponent;

  id: number;
  habilitar:boolean = true;
  datosEnviados: any;

  constructor(private activatedRoute: ActivatedRoute, private _genderService: GenderService, private fb: FormBuilder) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngAfterViewInit(): void {
    this._genderService.getGenderById(this.id).subscribe(data => {
      this.datosEnviados = data;
    });
  }
  
  removeGender(i: number): void {
    const gendersArray = this.genderFormComponent.genderForm.get('genders') as FormArray;
  
    if (gendersArray && i < gendersArray.length) {
      gendersArray.removeAt(i);
    } else {
      console.error(`El índice ${i} no es válido.`);
    }
  }
  
  actualizar(){
    const genderValues:Gender = {
      id: this.id,
      nombre: this.genderFormComponent.genderForm.value.nameGender || '',
      atributos: this.genderFormComponent.genderForm.value.genders || [],
      map: undefined
    }
  
    this._genderService.putGender(genderValues).subscribe(e => {
      alert('Agregado bien')
      console.log(e);
    },(error) => {
      console.log(error)
    })
    this.habilitar = false

  }
}

