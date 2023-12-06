// gender-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent {
  form: FormGroup;
  isResponsive=true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      genders: this.fb.array([]) // Utilizaremos un FormArray para gestionar los géneros
    });
  }

  // Getter para obtener el FormArray
  get genders() {
    return this.form.get('genders') as any;
  }

  // Agrega un nuevo género al FormArray
  addGender() {
    const genderGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    this.genders.push(genderGroup);
  }

  // Elimina un género del FormArray
  removeGender(index: number) {
    this.genders.removeAt(index);
  }

  // Maneja el envío del formulario
  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log(this.form.value);
  }
}
