import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonaCardComponent } from './persona-card/persona-card.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component:PersonaCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
