import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogMovieDetailComponent } from './dialog-movie-detail/dialog-movie-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DialogMovieDetailComponent,
  ],
  imports: [
    NgbModule,
    CommonModule
  ],
  entryComponents:[
    DialogMovieDetailComponent,
  ],
  exports: [
    NgbModule,
    DialogMovieDetailComponent
  ],
  providers: [ DialogMovieDetailComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
