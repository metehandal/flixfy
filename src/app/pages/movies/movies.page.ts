import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  popular: any[] = [];
  topRated: any[] = [];
  upComing: any[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.categoriesMovies();
  }
  categoriesMovies() {
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((data) => {
      console.log(data, 'POPULAR MOVIES');
      this.popular = data.results;
    });
  }

  getTopRatedMovies() {
    this.moviesService.getTopRatedMovies().subscribe((data) => {
      this.topRated = data.results;
    });
  }

  getUpcomingMovies() {
    this.moviesService.getUpcomingMovies().subscribe((data) => {
      this.upComing = data.results;
    });
  }
}
