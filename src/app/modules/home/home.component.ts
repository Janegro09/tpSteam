import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  games: any[] = [];
  misGames:  any[] = [];
  combinedGames: any[] = [];

  titulo: string = "Mis juegos";

  constructor(private gamesService: GamesService, private userService: UserService) {}

  ngOnInit(): void {
    // Utiliza forkJoin para esperar a que ambas solicitudes HTTP se completen
    forkJoin([
      this.gamesService.getGames(),
      this.userService.getGamesById(1)
    ]).subscribe(([gamesData, myGamesData]) => {
      this.games = gamesData;
      this.games.forEach((game: any) => {
        myGamesData.idJuegos.forEach((elem:any) => {
          if (elem.idGame === game.id) {
            game.shared = elem.shared
            this.misGames.push(game)
          }
        })
      });      
    });
  }
  
}
