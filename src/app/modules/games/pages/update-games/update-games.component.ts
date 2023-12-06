import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesFormComponent } from '../../components/games-form/games-form.component';
import { GamesService } from 'src/app/services/games.service';

interface Game {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  genero: string;
  requerimientos: string;
}

@Component({
  selector: 'app-update-games',
  templateUrl: './update-games.component.html',
  styleUrls: ['./update-games.component.css']
})

export class UpdateGamesComponent implements AfterViewInit {
  @ViewChild(GamesFormComponent) gamesFormComponent!: GamesFormComponent;
  @Input() titulo: string = "Modificar Juego";
  habilitar:boolean = false;

  id: number;
  encontrado?: Game;
  constructor(private activatedRoute: ActivatedRoute, private _gameService: GamesService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  
  ngAfterViewInit(): void {
    this._gameService.getGamesById(this.id).subscribe(data => {
      this.encontrado = data;

      if (this.gamesFormComponent?.formularioGames) {
        const formularioGames = this.gamesFormComponent.formularioGames;
        
        formularioGames.patchValue({
          gameName: this.encontrado.nombre,
          gamePrice: this.encontrado.precio,
          gameImg: this.encontrado.img,
          gameDescription: this.encontrado.requerimientos,
          gameGender: this.encontrado.genero
        });
      }
    });
  }


  get isFormValid():boolean {
    if (this.gamesFormComponent) {
      return this.gamesFormComponent.formularioGames.valid
    } else {
      return false
    }
  }
  actualizar =() => {
    const gameValues:Game = {
      id:this.id,
      nombre: this.gamesFormComponent.formularioGames.value.gameName || '',
      precio: this.gamesFormComponent.formularioGames.value.gamePrice || 0,
      img: this.gamesFormComponent.formularioGames.value.gameImg || '',
      requerimientos : this.gamesFormComponent.formularioGames.value.gameDescription || '',
      genero : this.gamesFormComponent.formularioGames.value.gameGender || ''

    }

    this._gameService.putGames(gameValues).subscribe(e => {
      alert('Acualizado bien')
      console.log(e)
      }
    )
  }

  // ngOnInit(): void {
  //   this._gameService.getGamesById(this.id).subscribe(data => {
  //     this.encontrado = data;

  //     if (this.gamesFormComponent.formularioGames) {
  //       const formularioGames = this.gamesFormComponent.formularioGames;
        
  //       formularioGames.patchValue({
  //         gameName: this.encontrado.nombre,
  //         gamePrice: this.encontrado.precio,
  //         gameImg: this.encontrado.img,
  //         gameDescription: this.encontrado.requerimientos,
  //         gameGender: this.encontrado.genero
  //       });
  //     }
  //   });
  // }

 
}
