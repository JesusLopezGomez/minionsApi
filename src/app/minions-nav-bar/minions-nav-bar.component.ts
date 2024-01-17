import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-minions-nav-bar',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './minions-nav-bar.component.html',
})
export class MinionsNavBarComponent {
  termino:string = "";

  constructor(private router:Router){};

  goTo(){
    this.router.navigate(["minions/",this.termino])
  }
}
