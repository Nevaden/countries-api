import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path: '', redirectTo: "/index", pathMatch: "full"},
  {path: 'index', component: IndexComponent, children:[
    {path: ':id', component: DetailComponent}
  ]},
  {path: '*', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
