import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Minion } from '../interfaces/Minion';
import { MinionService } from '../services/minion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minion-id',
  standalone: true,
  imports: [],
  templateUrl: './minion-id.component.html',
  styleUrl: './minion-id.component.css'
})
export class MinionIdComponent implements OnInit{

  minion!:Minion;

  constructor(private serviceMinion :MinionService,private route:ActivatedRoute){
    this.minion = {id:'',name:'',bio:'',birth:'',img:'',side:''}
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next:(data) => {
        
        this.serviceMinion.getMinionsById(data['id']).subscribe({
          next: (minions) => this.minion = minions
        })
        
      }
    })

  }
}
