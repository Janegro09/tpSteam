import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderComponent } from './pages/gender/gender.component';
import { EditGenderComponent } from './pages/edit-gender/edit-gender.component';

const routes: Routes = [
  {path:'',component: GenderComponent},
  {path:':id', component:EditGenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
