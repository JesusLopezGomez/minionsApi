import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/Minion';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MinionIdComponent } from '../minion-id/minion-id.component';
import { ManageMinionComponent } from '../manage-minion/manage-minion.component';
import { min } from 'rxjs';

@Component({
  selector: 'app-minion',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,RouterLinkActive,MinionIdComponent,ManageMinionComponent],
  templateUrl: './minion.component.html',
  styleUrl: './minion.component.css'
})
export class MinionComponent implements OnChanges{
  
  minions : Minion[] = [];
  
  constructor(private minionService:MinionService){}
  
  @Input() name:string = "";
  
  ngOnChanges(): void {
    if(this.name){
      this.minionService.getMinionsByName(this.name).subscribe({
        next: (minions) => this.minions = minions
      })  
    }else{
      this.minionService.getMinions().subscribe({
        next: (minions) => this.minions = minions
      })  
    }
  }

  deleteMinion(id:string){
    this.minionService.deleteMinion(id).subscribe({
      next: () => this.minions = this.minions.filter((minionF) => minionF.id !== id)
    });
  }
}
