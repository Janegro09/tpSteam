import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CreateGamesComponent } from './modules/games/pages/create-games/create-games.component';
import { UpdateGamesComponent } from './modules/games/pages/update-games/update-games.component';
import { GamesListComponent } from './modules/games/components/games-list/games-list.component';
import { CreateGenderComponent } from './modules/gender/pages/create-gender/create-gender.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'games', loadChildren: () => import ('./modules/games/games.module').then(m=> m.GamesModule) },
  {path:'**', redirectTo:'/home', pathMatch:'full'}
  // {path:'updateGender', component: UpdateGender}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
