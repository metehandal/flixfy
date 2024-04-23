import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit, AfterViewInit {
  movieId: any;
  movieData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.movieId = params['movieId'];
    });
  }

  ngAfterViewInit() {
    this.getMovie();
  }

  ngOnInit() {
    // this.getMovie();
  }

  getMovie() {
    this.moviesService.getMovieDetails(this.movieId).subscribe((data) => {
      console.log(data);
      if (data) {
        this.movieData = data;
      }
    });
  }
}
