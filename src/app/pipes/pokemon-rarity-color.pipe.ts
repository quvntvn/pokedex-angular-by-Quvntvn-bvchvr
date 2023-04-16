import { Pipe, PipeTransform } from "@angular/core";

/**
 * Exemple d'utilisation
 * {{ pokemon.Rarity | pokemonRarityColor }}
 */
@Pipe({ name: "pokemonRarityColor" })
export class PokemonRarityColorPipe implements PipeTransform {

  transform(Rarity: string): string {
    let color: string;

    switch (Rarity) {
      case "commun":
        color = "red ligten-1";
        break;

      case "rare":
        color = "blue lighten-1";
        break;

      case "epique":
        color = "green ligthen-1";
        break;

      default:
        color = "légendaire";
        break;
    }

    return "chip " + color;
  }

}
