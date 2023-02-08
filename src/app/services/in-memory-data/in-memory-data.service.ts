import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../types/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Estranho' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Capitão América' },
      { id: 15, name: 'Homem de Ferro' },
      { id: 16, name: 'Homem Aranha' },
      { id: 17, name: 'Viuva Negra' },
      { id: 18, name: 'Pantera Negra' },
      { id: 19, name: 'Homem Formiga' },
      { id: 20, name: 'Thor' },
      { id: 21, name: 'Falcão' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
