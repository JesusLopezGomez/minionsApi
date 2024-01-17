import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interfaces/Minion';
import { MinionService } from '../services/minion.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-minion',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './manage-minion.component.html',
})
export class ManageMinionComponent implements OnInit{

  add:boolean = false;
  edit:boolean = false;

  minion:Minion;

  @Input() id = null;

  constructor(private minionService:MinionService){
    this.minion = {id:'',name:'',bio:'',birth:'',img:'',side:''}
  }

  ngOnInit(): void {
    if(this.id){
      this.minionService.getMinionsById(this.id).subscribe({
        next: (minion) => this.minion = minion,
      })
    }
  }

  saveOrEdit(){
    if(this.id){
      this.minionService.editMinion(this.minion).subscribe({
        next: () => this.edit = true
      });
    }else{
      this.minionService.addMinion(this.minion).subscribe({
        next: () => this.add = true
      });
    }
  }

}
