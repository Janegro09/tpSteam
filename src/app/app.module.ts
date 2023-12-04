import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';

// import { GamesFormComponent } from './modules/games/components/games-form/games-form.component';
// import { CreateGamesComponent } from './modules/games/pages/create-games/create-games.component';
// import { UpdateGamesComponent } from './modules/games/pages/update-games/update-games.component';
// import { CreateGenderComponent } from './modules/gender/pages/create-gender/create-gender.component';
// import { EditGenderComponent } from './modules/gender/pages/edit-gender/edit-gender.component';
// import { GenderFormComponent } from './modules/gender/components/gender-form/gender-form.component';
// import { GamesListComponent } from './modules/games/components/games-list/games-list.component';
// import { GenderListComponent } from './modules/gender/components/gender-list/gender-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
    // GamesFormComponent,
    // CreateGamesComponent,
    // UpdateGamesComponent,
    // CreateGenderComponent,
    // EditGenderComponent,
    // GenderFormComponent,
    // GamesListComponent,
    // GenderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
