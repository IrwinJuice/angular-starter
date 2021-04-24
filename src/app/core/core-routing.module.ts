import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

const routes: Routes = [
 // {
 //   path: '',
 //   pathMatch: 'full',
 //   component: ,
 // },
 // {
 //   path: 'about',
 //   loadChildren: () => import('./about/about.module').then(module => module.AboutModule)
 // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreRoutingModule { }
