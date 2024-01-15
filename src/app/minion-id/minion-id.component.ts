import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Minion } from '../interfaces/Minion';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-minion-id',
  standalone: true,
  imports: [],
  templateUrl: './minion-id.component.html',
  styleUrl: './minion-id.component.css'
})
export class MinionIdComponent implements OnChanges{

  minion!:Minion;

  @Input() id = "";

  constructor(private serviceMinion :MinionService){
    this.minion = {id:'',name:'',bio:'',birth:'',img:'',side:''}
  }

  ngOnChanges(): void {
    console.log(this.id)
    this.serviceMinion.getMinionsById(this.id).subscribe({
      next: (minions) => this.minion = minions
    })
  }
}
