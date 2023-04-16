import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonRarityColor'
})
export class PokemonRarityColorPipe implements PipeTransform {

  transform(value: string): string {
    let color: string;

    switch (value) {
      case 'Commun':
        color = 'rarity-common';
        break;
      case 'Rare':
        color = 'rarity-rare';
        break;
      case 'Épique':
        color = 'rarity-epic';
        break;
      case 'Légendaire':
        color = 'rarity-legendary';
        break;
      default:
        color = 'rarity-default';
    }

    return color;
  }

}
