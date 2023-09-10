import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum TiposDeBusca {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}


@Injectable({
  providedIn: 'root'
})

export class FilmeService {

  url = 'http://www.omdbapi.com/';
  apiKey = '83e3b721';

  constructor(private http: HttpClient) { }

  buscarFilmes(titulo: string, type: TiposDeBusca): Observable<any> {
    console.log(titulo);
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apikey=${this.apiKey}`);
  }

  pegarDetalhes(id: string | null) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}