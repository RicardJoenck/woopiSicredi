import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dragons',
    loadChildren: './dragon/dragon.module#DragonModule'
  },
  {
    path: 'users',
    loadChildren: './user/user.module#UserModule'
  },
  { path: '**', redirectTo: 'dragons/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
