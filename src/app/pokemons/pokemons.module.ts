import { NgModule } from '@angular/core';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { PokemonsService } from './pokemons.service';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { CreatePokemonComponent } from '../create-pokemon/create-pokemon.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,

    PokemonTypeColorPipe,
    BorderCardDirective,
    CreatePokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonsRoutingModule
  ],
  providers: [
    PokemonsService
  ],
  bootstrap: []
})
export class PokemonsModule {
}
