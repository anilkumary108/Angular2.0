import { Component } from 'angular2/core';
import { OnInit } from "angular2/src/core/linker";


// @Component({
//     selector: 'heroList',
//     template: `
//             <h2>Hero List</h2>
//             <p><i>Pick a hero from the list</i></p>
//             <ul>
//             <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
//                 {{hero}}
//             </li>
//             </ul>
//             <p *ngIf="selectedHero" [hero]="selectedHero"></p>    
//     `
// })

// getHeroes() {
//     this.backend.getAll(Hero).then( (heroes: Hero[]) => {
//       this.logger.log(`Fetched ${heroes.length} heroes.`);
//       this.heroes.push(...heroes); // fill cache
//     });
//     return this.heroes;
//   }

@Component({
  selector:    'hero-list',
  templateUrl: './hero-list.component.html',
  //providers:  [ HeroService ]
})

export class HeroListComponent implements OnInit {
    heroes = [];
    selectedHero = "";

    ngOnInit() {
        this.heroes = ["Test1","Test2","Test3"];
    }

    selectHero(hero) { this.selectedHero = hero; }
}
