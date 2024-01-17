import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/Minion';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { MinionIdComponent } from '../minion-id/minion-id.component';
import { ManageMinionComponent } from '../manage-minion/manage-minion.component';
import { catchError, ignoreElements, min, Observable, of } from 'rxjs';

@Component({
  selector: 'app-minion',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive,MinionIdComponent,ManageMinionComponent,AsyncPipe,JsonPipe],
  templateUrl: './minion.component.html',
  styleUrl: './minion.component.css'
})
export class MinionComponent implements OnChanges{
  minions$ !: Observable<Minion[]>;
  error$!: Observable<any>;
  constructor(private minionService:MinionService){}
  
  @Input() name:string = "";
  
  ngOnChanges(): void {
    if(this.name){
      /*this.minionService.getMinionsByName(this.name).subscribe({
        next: (minions) => {
          this.minions = minions;
          this.error = false;
        },
        error: () =>  this.error = true
      })*/
      this.minions$ = this.minionService.getMinionsByName(this.name)
      this.error$ = this.minions$.pipe(
        ignoreElements(),
        catchError(err => of(err))
      );
    }else{
      /*this.minionService.getMinions().subscribe({
        next: (minions) => {
          this.minions = minions
          this.error = false;
        },
        error: () =>  this.error = true
      })*/
      this.minions$ = this.minionService.getMinions()
      this.error$ = this.minions$.pipe(
        ignoreElements(),
        catchError(err => of(err))
      )
    }

  }

  deleteMinion(id:string){
    /*this.minionService.deleteMinion(id).subscribe({
      next: () =>{
        this.minions = Observable.apply(this.minions.filter((minionF) => minionF.id !== id));
        this.error = false;
      },
      error: () =>  this.error = true
    });*/
    this.minionService.deleteMinion(id).subscribe({
      next: () => this.minions$ = this.minionService.getMinions()
    });

  }
}
