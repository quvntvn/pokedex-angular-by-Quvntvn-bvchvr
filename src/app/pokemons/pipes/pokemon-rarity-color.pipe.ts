import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonRarityColor'
})
export class PokemonRarityColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'common':
        return 'green-text';
      case 'uncommon':
        return 'blue-text';
      case 'rare':
        return 'purple-text';
      case 'very rare':
        return 'orange-text';
      case 'legendary':
        return 'red-text';
      default:
        return 'black-text';
    }
  }

}
