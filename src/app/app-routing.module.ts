import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';

const routes: Routes = [
  {path: '', component:ListmovieComponent},
  {path: 'list-movie',component: ListmovieComponent},
  {path: 'add-movie', component: AddmovieComponent},
  {path: 'update-movie', component: UpdatemovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
