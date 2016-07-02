import { Component, Input } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})


export class HeroDetailsComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
          .then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}