import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  games:Game[]=[];
  encontrado?:Game;

  // al iniciar es lo primero que ejecuta
  constructor(private activatedRoute: ActivatedRoute){
    
    this.games = [
      {
        id: 1,
        nombre: "Spiderman",
        precio: 200,
        img:"https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/BtsjAgHT9pqHRXtN9FCk7xc8.png",
        genero:"Aventura",
        requerimientos:""
      },
      {
        id: 2,
        nombre: "Spiderman 2",
        precio: 250,
        img:"https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
        genero:"Aventura",
        requerimientos:""
      },
      {
        id: 3,
        nombre: "warcraft",
        precio: 220,
        img:"https://www.mundodeportivo.com/alfabeta/hero/2023/11/warcraft-the-war-within.jpg",
        genero:"Mundo abierto",
        requerimientos:""
      },
      {
        id: 4,
        nombre: "GTA 6",
        precio: 400,
        img:"https://img.asmedia.epimg.net/resizer/HRwgz-pDsn6uLd9ynmQlz6xK-0o=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PGBWGIK3MVHUJGK74NN22GNAZ4.jpg",
        genero:"Tiros, persecusion",
        requerimientos:""
      }
    ]

    this.encontrado = this.games.find(elem => elem.id == this.activatedRoute.snapshot.params['id'])

    console.log(this.encontrado)
  }
  ngOnInit(): void {
    console.log(this.encontrado)
    console.log("Hola 2")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambió")
  }
}
