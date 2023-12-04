import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesFormComponent } from './components/games-form/games-form.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { CreateGamesComponent } from './pages/create-games/create-games.component';
import { UpdateGamesComponent } from './pages/update-games/update-games.component';
import { GameComponent } from './pages/game/game.component';


@NgModule({
  declarations: [
    GamesFormComponent,
    GamesListComponent,
    CreateGamesComponent,
    UpdateGamesComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
