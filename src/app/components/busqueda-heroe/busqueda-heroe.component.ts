import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Servicios/heroes.service';



@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html'
  })
export class BusquedaHeroeComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService ) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    })
  }

}
