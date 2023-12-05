import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { GenderService } from 'src/app/services/gender.service';

interface Game {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  genero: string;
  requerimientos: string;
}
interface Gender {
  id:number,
  nombre: string,
  atributos: string[]
}

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})


export class GamesFormComponent implements OnInit, OnChanges {
  generos:any;

  formularioGames = new FormGroup({
    gamePrice: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{1,2})?$/)
    ]),
    gameName: new FormControl("", [
      Validators.required
    ]),
    gameImg: new FormControl("", [
      Validators.required,
      Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/)
    ]),
    gameDescription: new FormControl("", [
      Validators.required
    ]),
    gameGender: new FormControl("", [
      Validators.required
    ])
  });

  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService, private genderService:GenderService) {

    
  }
  ngOnInit(): void {
    this.genderService.getGender().subscribe(data => {
      this.generos = data.map((gender: { nombre: string; }) => gender.nombre);
      console.log(this.generos);
    });
    console.log("Hola G");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambió");
  }

  // Esta función te ayudará a verificar si un campo es inválido y fue tocado por el usuario
  isInvalidField(field: string) {
    const control = this.formularioGames.get(field);
    return control && control.invalid && (control.dirty || control.touched);
  }
}
