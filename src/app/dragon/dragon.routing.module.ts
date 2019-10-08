import { AuthGuard } from './../core/auth/auth.guard';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailsComponent } from './dragon-details/dragon-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: DragonListComponent
      },
      {
        path: 'details',
        component: DragonDetailsComponent
      },
      {
        path: 'details/:id',
        component: DragonDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonRoutingModule { }
