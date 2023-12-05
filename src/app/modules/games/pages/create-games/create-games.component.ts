import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  selector: 'app-create-games',
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.css']
})
export class CreateGamesComponent implements OnInit, OnChanges {
  @ViewChild(GamesFormComponent) gamesFormComponent!: GamesFormComponent;
  @Input() titulo?:string = "Alta de Juegos";
  // titulo:string = "Crear Juego";
  habilitar:boolean = false;
  id = 0
  
  constructor(private _gameService: GamesService){
    this.id = this._gameService.getGames.length;
  }
  
  guardar(){

    const gameValues:Game = {
      id:this.id,
      nombre: this.gamesFormComponent.formularioGames.value.gameName || '',
      precio: this.gamesFormComponent.formularioGames.value.gamePrice || 0,
      img: this.gamesFormComponent.formularioGames.value.gameImg || '',
      requerimientos : this.gamesFormComponent.formularioGames.value.gameDescription || '',
      genero : this.gamesFormComponent.formularioGames.value.gameGender || ''

    }

    this._gameService.postGames(gameValues).subscribe(e => console.log(e))
  }

  get isFormValid():boolean {
    if (this.gamesFormComponent) {
      return this.gamesFormComponent.formularioGames.valid
    } else {
      return false
    }
  }
  ngOnInit(): void {
    console.log("Hola 2")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambió")
  }


}
