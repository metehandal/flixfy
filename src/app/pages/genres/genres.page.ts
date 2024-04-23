import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {
  genreId: any;
  genreName: any;
  genre: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.genreId = params.genreId;
      this.genreName = params.genreName;
      this.getMoviesByGenre(this.genreId);
    });
  }

  ngOnInit(): void {}

  getMoviesByGenre(genreId: any) {
    this.moviesService.getMoviesByGenre(genreId).subscribe((data) => {
      this.genre = data.results;
    });
  }
}
