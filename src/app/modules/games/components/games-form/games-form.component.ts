import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

interface Game {
  id:number,
  nombre: string,
  precio: number,
  img: string,
  genero: string,
  requerimientos:string
}

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit, OnChanges{
  games:Game[] = [];  
  encontrado?:Game;
  
  // al iniciar es lo primero que ejecuta
  
  constructor(private activatedRoute: ActivatedRoute, private gamesService:GamesService){
    
    this.gamesService.getGames().subscribe(data => {
      this.games = [data];
    })

    this.encontrado = this.games.find(elem => elem.id == this.activatedRoute.snapshot.params['id'])

  }
  ngOnInit(): void {
    console.log(this.encontrado)
    console.log("Hola 2")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambió")
  }
}
