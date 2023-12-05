import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { CreateGenderComponent } from './pages/create-gender/create-gender.component';
import { GenderComponent } from './pages/gender/gender.component';
import { EditGenderComponent } from './pages/edit-gender/edit-gender.component';
import { GenderFormComponent } from './components/gender-form/gender-form.component';
import { GenderListComponent } from './components/gender-list/gender-list.component';

@NgModule({
  declarations: [
    CreateGenderComponent,
    EditGenderComponent,
    GenderComponent,
    GenderListComponent,
    GenderFormComponent,
  
  ],
  imports: [
    CommonModule,
    GenderRoutingModule
  ]
})
export class GenderModule { }
