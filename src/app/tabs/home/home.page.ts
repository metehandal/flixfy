import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('swiper', { read: ElementRef }) swiper: ElementRef | undefined;
  popular: any[] = [];
  topRated: any[] = [];
  upComing: any[] = [];
  genres: any[] = [];
  moviesByGenre: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getGenres();
  }
  onSlideChange() {
    const activeSlide = this.swiper?.nativeElement.swiper.activeIndex;
  }

  ngAfterViewInit() {
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

  getGenres() {
    this.moviesService.getGenres().subscribe((data) => {
      this.genres = data.genres;
      this.getMoviesBySelectedGenre({ detail: { value: this.genres[0].id } });
    });
  }

  getMoviesBySelectedGenre(event: any) {
    const selectedGenreId = event.detail.value;
    this.moviesService.getMoviesByGenre(selectedGenreId).subscribe((data) => {
      this.moviesByGenre = data.results;
    });
  }
}
