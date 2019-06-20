import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogMovieDetailComponent } from '../dialog-movie-detail/dialog-movie-detail.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lstMovies: Movie[] = [];
  urlImage = environment.urlTmdb;

  formPage = this.fb.group({
    title: ['', Validators.required],
  });
  
  constructor(
    private _movieService: MovieService,
    private _modalService: NgbModal,
    private _toastr: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  // Método implementado como exemplo de obter por ID
  // Não foi utilizado porque já tenho o objeto "movie" então não seria recomendado uma nova requisição
  // acarretando em nova chamada ao servidor, consumo de trafego de dados (caso dispositivos móveis), entre outros
  // Ideal a chamada se houvessem mudanças nas informações do filme ou alguma RN, por exemplo, cálculo, disponibilidade de assentos, etc.
  getById(idMovie: number) {
    this._movieService.getMovieById(idMovie).subscribe(item => {
      this.movieDetail(item);
    });
  }

  findByTitle() {
    if (this.formPage.valid) {
      this.getMovies();
    } else {
      this._toastr.error('Digite o nome de um filme');
    }
  }

  getMovies() {
    const filter = new Movie();
    filter.title = this.formPage.get('title').value;
    
    this._movieService.searchMovies(filter).subscribe(
      response => {
        this.lstMovies = response['results'] as Movie[];
      }
    );
  }

  movieDetail(movie: Movie){
    const modalDetail = this._modalService.open(DialogMovieDetailComponent, { size: 'lg' });
    modalDetail.componentInstance.movie = movie;
  }

}
