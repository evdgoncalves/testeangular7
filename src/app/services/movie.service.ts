import { Injectable } from '@angular/core';
import { HttpClient } from 'node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  urlApi: string;
  constructor(protected http: HttpClient) {
    this.urlApi = environment.baseUrl;
  }

  searchMovies(filter: Movie) {
    const url = this.urlApi + 'search/movie?language=pt-BR&query='+ filter.title + '&page=1&include_adult=' + filter.adult;
    return this.http.get<Response>(url);
  }

  getMovieById(idMovie: number) {
    const url = this.urlApi + 'movie/' + idMovie + '?language=pt-BR';
    return this.http.get<Movie>(url);
  }
}
