import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MinionsNavBarComponent } from './minions-nav-bar/minions-nav-bar.component';
import { MinionComponent } from './minion/minion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MinionsNavBarComponent, MinionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minionsApi';
}
