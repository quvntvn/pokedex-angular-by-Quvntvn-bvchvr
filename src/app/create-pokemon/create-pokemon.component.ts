import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../donnees-pokemons/pokemon';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  
  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.pokemonsService.createPokemon(this.pokemon)
      .subscribe(_ => this.router.navigate(['/pokemon/all']));
  }

  goBack() {
    this.router.navigate(['/pokemon/all']);
  }
}
