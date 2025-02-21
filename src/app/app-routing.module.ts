import { AddAppartementComponent } from './appartment/add-appartement/add-appartement.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './components/residences/residences.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'residence', component:ResidencesComponent},
  {path:'**', component:NotFoundComponent},
  {path:'addApart', component:AddAppartementComponent},

  {path:'home', component:HomeComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
