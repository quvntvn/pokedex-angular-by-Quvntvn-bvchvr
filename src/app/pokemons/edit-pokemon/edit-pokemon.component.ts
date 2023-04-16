import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../donnees-pokemons/pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import {POKEMONS} from "../donnees-pokemons/mock-pokemon";
import {PokemonsService} from "../pokemons.service";

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    let idUrl = this.route.snapshot.params["id"];
    this.pokemonsService.getPokemon(idUrl).subscribe(pokemon => this.pokemon = pokemon);
  }
}
