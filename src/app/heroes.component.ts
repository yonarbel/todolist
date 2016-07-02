import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './hero.service';
import {AppComponent} from './app.component'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  directives: [HeroDetailsComponent,ROUTER_DIRECTIVES],
  styleUrls: ['heroes.component.css'],

})



export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];


  selectedHero: Hero;
  constructor(private router: Router,private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroesSlowly() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
    //this.getHeroesSlowly();
  }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


  onSelect(hero: Hero) { this.selectedHero = hero; }
}

