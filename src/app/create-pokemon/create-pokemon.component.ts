import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../donnees-pokemons/pokemon';


@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {
  pokemon: Pokemon = {
    name: '',
    hp: 0,
    cp: 0,
    picture: '',
    types: [],
    rarity: ''
  };
  types: string[] = [
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Poison',
    'Fighting',
    'Psychic',
    'Bug',
    'Normal',
    'Ice',
    'Ghost',
    'Dragon',
  ];
  rarities: string[] = [
    'Common',
    'Uncommon',
    'Rare',
    'Very Rare',
    'Legendary',
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submit form!');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  hasType(type: string): boolean {
   return this.pokemon.types.includes(type);
  }

  isTypesValid(type: string): boolean {
    const typeCount = this.pokemon.types.length;
    return (
      (typeCount < 2 && !this.hasType(type)) || this.hasType(type)
    );
  }

  selectType(event: any, type: string): void {
    const isChecked = event.target.checked;
    if (isChecked && !this.hasType(type)) {
      this.pokemon.types.push(type);
    } else {
      this.pokemon.types = this.pokemon.types.filter((t: string) => t !== type);
    }
  }
}
