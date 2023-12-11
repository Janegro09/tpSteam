import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenderService } from 'src/app/services/gender.service';

interface Gender {
  id:number,
  nombre: string,
  precio: number,
  img: string,
  genero: string,
  requerimientos:string
}

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})


export class GenderListComponent {
  genders:any = [];  

  @Input() titulo:string = "Listado de Generos"
  constructor(private genderService:GenderService, private activatedRoute: ActivatedRoute,  private router: Router, private cdRef: ChangeDetectorRef){
    this.genderService.getGender().subscribe(data => {
      this.genders = data;
    })
  }

  borrarGender(id:number) {
    if (confirm('¿Estás seguro de que quieres borrar este juego?')) {
      this.genderService.deleteGender(id).subscribe(
        () => {
          this.genderService.getGender().subscribe(data => {
            this.genders = data;
          })
          // this.router.navigate([this.router.url]);
          this.cdRef.detectChanges()
        },
        error => {
          console.error('Error al borrar el juego:', error);
        }
      );
    }
  }

}