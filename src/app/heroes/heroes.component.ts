import { Component } from '@angular/core';

import { Hero } from '../types/hero';

import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
