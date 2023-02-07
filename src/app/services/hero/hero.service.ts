import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../types/hero';

import { HEROES } from '../../mocks/mock-heroes';

import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.add('HeroService: fetched heroes!')

    return heroes;
  }
}
