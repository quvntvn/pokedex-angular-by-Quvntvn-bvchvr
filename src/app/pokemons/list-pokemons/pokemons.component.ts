import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../donnees-pokemons/pokemon";
import { POKEMONS } from "../donnees-pokemons/mock-pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "../pokemons.service";

@Component({
  selector: "list-pokemon",
  templateUrl: "./pokemons.component.html"
})
export class PokemonsComponent implements OnInit {
  pokemons !: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    // Insert data from mock
    //this.pokemons = this.pokemonService.getPokemons();
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }

  goCreate(): void {
    this.router.navigate(['/pokemon/create']);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.id);
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link); // redirect to "/pokemon/1"
  }
}
