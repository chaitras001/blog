import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainblogComponent } from './mainblog/mainblog.component';
import { ReadmoreComponent } from './readmore/readmore.component';

const routes: Routes = [
   {
     path:"mainblog",
     component: MainblogComponent
   },
   {
     path:"readmore",
     component: ReadmoreComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
