import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainblogComponent } from './mainblog/mainblog.component';
import { Mainblog1Component } from './mainblog1/mainblog1.component';
import { Mainblog2Component } from './mainblog2/mainblog2.component';


const routes: Routes = [
  //  {
  //    path:'',
  //     redirectTo:'/mainblog',
  //     pathMatch :'full'
  //   },
   {
     path:"mainblog",
     component: MainblogComponent
   },
   {
     path:"mainblog1",
     component: Mainblog1Component
   },
   {
    path:"mainblog2",
    component: Mainblog2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainblogComponent,Mainblog1Component,Mainblog2Component]
