// gender-form.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})

export class GenderFormComponent implements OnChanges{
  genderForm: FormGroup;
  @Input() datoDelPadre:any;

  constructor(private fb: FormBuilder, ) {
    
    this.genderForm = this.fb.group({
      nameGender: ['', Validators.required],
      genders: this.fb.array([]),
    });

    // Agregar un conjunto de atributos por defecto al inicializar el formulario
    this.addGender();
  }

  ngOnChanges(): void {
    if(this.datoDelPadre){
      this.genderForm.patchValue({
        nameGender: this.datoDelPadre.nombre,
      });
      // Quito el conjunto de atributos por defecto en blanco
      this.removeGender(0)
      this.datoDelPadre.atributos.forEach((elem: any) => {
        this.genders.push(this.fb.group({
          nameAtt: elem.nameAtt
        }))
      })
    }
  }

  // Getter para obtener el FormArray
  get genders() {
    return this.genderForm.get('genders') as FormArray;
  }
  
  // Agrega un nuevo conjunto de atributos al FormArray
  addGender() {
    const genderGroup = this.fb.group({
      nameAtt: ['', Validators.required],
    });

    this.genders.push(genderGroup);
  }

  // Elimina un conjunto de atributos del FormArray
  removeGender(index: number) {
    this.genders.removeAt(index);
  }

  // Maneja el envío del formulario
  // onSubmit() {
  //   if (this.genderForm.valid) {
  //     // Lógica para manejar el envío del formulario
  //     console.log(this.genderForm.value);
  //   } else {
  //     // Marcar los campos no válidos o mostrar un mensaje de error
  //     this.markAllAsDirty(this.genderForm);
  //   }
  // }

  // Marca todos los controles y subcontroles como sucios (dirty)
  private markAllAsDirty(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markAllAsDirty(control);
      } else {
        control.markAsDirty();
      }
    });
  }
}
