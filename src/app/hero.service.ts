import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './types/hero';
import { HEROES } from './mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
