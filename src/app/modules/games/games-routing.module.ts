import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { CreateGamesComponent } from './pages/create-games/create-games.component';
import { UpdateGamesComponent } from './pages/update-games/update-games.component';
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [
  // {path:'games', loadChildren: () => import ('./modules/games/games.module').then(m=> m.GamesModule) },
  {path:'', component: GamesListComponent },
  {path:'createGames', component: CreateGamesComponent},
  {path:':id/updateGames', component: UpdateGamesComponent},
  {path:':id', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
