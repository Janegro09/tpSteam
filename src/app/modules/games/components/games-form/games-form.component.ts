import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit, OnChanges{

  constructor(){
    // al iniciar es lo primero que ejecuta
  }

  ngOnInit(): void {
    console.log("Hola 2")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambió")
  }
}
