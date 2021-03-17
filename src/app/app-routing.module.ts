import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './Components/genre/genre.component';
import { TodosComponent } from './Components/todos/todos.component';


const routes: Routes = [
  // objekter til vores path - der eksisterer undermenuer her... figure it out P
  { path: 'sti', component:TodosComponent},
  { path: 'todos', component:TodosComponent},
  { path: 'genre', component:GenreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
