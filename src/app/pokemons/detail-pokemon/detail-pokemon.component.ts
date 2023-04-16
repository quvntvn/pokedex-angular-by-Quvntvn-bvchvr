import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Pokemon} from "../donnees-pokemons/pokemon";
import {POKEMONS} from "../donnees-pokemons/mock-pokemon";
import {PokemonsService} from "../pokemons.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    let idUrl = this.route.snapshot.params["id"];
    this.pokemonsService.getPokemon(idUrl).subscribe(pokemon => this.pokemon = pokemon);
    // this.pokemons = POKEMONS;
    //
    // let id = this.route.snapshot.params["id"];
    // for (let i = 0; i < this.pokemons.length; i++) {
    //   if (this.pokemons[i].id == id) {
    //     this.pokemon = this.pokemons[i];
    //   }
    // }
  }

  goBack() {
    this.router.navigate(["/pokemon/all"]);
  }

  goEdit() {
    this.router.navigate(["/pokemon/edit", this.pokemon.id]);
  }
}
