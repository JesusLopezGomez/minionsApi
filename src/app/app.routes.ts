import { Routes } from '@angular/router';
import { MinionComponent } from './minion/minion.component';
import { MinionIdComponent } from './minion-id/minion-id.component';
import { ManageMinionComponent } from './manage-minion/manage-minion.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"minions",component:MinionComponent,
    children:[
        {path:"infoId/:id",component:MinionIdComponent}
    ]},
    {path:"minions/:name",component:MinionComponent},
    {path:"addMinion",component:ManageMinionComponent},
    {path:"editMinion/:id",component:ManageMinionComponent},
    {path:"deleteMinion/:id",component:MinionComponent},
];
