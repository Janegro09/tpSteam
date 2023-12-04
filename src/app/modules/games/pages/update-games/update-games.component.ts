import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-games',
  templateUrl: './update-games.component.html',
  styleUrls: ['./update-games.component.css']
})
export class UpdateGamesComponent {
  @Input() titulo:string = "Modificar Juego";
  

}
