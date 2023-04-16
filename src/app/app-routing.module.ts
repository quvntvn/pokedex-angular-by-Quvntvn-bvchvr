import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';


const routes: Routes = [
  {
    path: "", redirectTo: 'pokemon/all', pathMatch: "full"
  },
  { path: 'pokemon/create', component: CreatePokemonComponent },
  { path: "**", component: PageNotFoundComponent } // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
