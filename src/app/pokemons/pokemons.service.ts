import { Injectable } from "@angular/core";
import { Pokemon } from "./donnees-pokemons/pokemon";
import { POKEMONS} from "./donnees-pokemons/mock-pokemon";
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class PokemonsService {

  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient) {
  }

/*  getPokemons(): Pokemon[] {
    return POKEMONS
  }*/

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const newId = Math.max(...POKEMONS.map(p => p.id)) + 1;
    pokemon.id = newId;
    POKEMONS.push(pokemon);
    return of(pokemon);
  }

  private log(log: string) {
    console.info(log);
  }

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}



  getPokemons(): Observable<any> {
    console.log(this.pokemonsUrl)
    return this.http.get(this.pokemonsUrl)
  }

  savePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }


  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    )
  }

  // getPokemon(id: number) {
  //   let pokemons = POKEMONS;
  //   for (let i = 0; i < pokemons.length; i++) {
  //     if (pokemons[i].id == id) {
  //       return pokemons[i]
  //     }
  //   }
  //   return "false"
  // }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.delete<Pokemon>(url, httpOptions);
  }
}
