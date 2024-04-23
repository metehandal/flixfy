import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categoryName: string = '';
  category: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.categoryName = params.categoryName;
    });
  }

  ngOnInit() {
    const category = this.categoryName.toLowerCase().split(' ').join('-');
    switch (category) {
      case 'popular':
        this.getPopularMovies();
        break;
      case 'top-rated':
        this.getTopRatedMovies();
        break;
      case 'upcoming':
        this.getUpcomingMovies();
        break;
      default:
        // genre movies
        // adventure-id
        const genreId = category.split('-')[1];
        this.getMoviesByGenre(genreId);
        this.categoryName = category.split('-')[0];
        break;
    }
  }

  getMoviesByGenre(genreId: any) {
    this.moviesService.getMoviesByGenre(genreId).subscribe((data) => {
      this.category = data.results;
    });
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((data) => {
      console.log(data, 'POPULAR MOVIES');
      this.category = data.results;
    });
  }

  getTopRatedMovies() {
    this.moviesService.getTopRatedMovies().subscribe((data) => {
      this.category = data.results;
    });
  }

  getUpcomingMovies() {
    this.moviesService.getUpcomingMovies().subscribe((data) => {
      this.category = data.results;
    });
  }
}
