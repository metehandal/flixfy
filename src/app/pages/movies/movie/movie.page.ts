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
  credits: any;
  reviews: any;
  videos: any;
  images: any;
  recommendations: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.movieId = params['movieId'];
    });
  }

  ngAfterViewInit() {
    // this.getMovie();
  }

  ngOnInit() {
    this.getMovie();
    this.getMovieCredits();
    this.getMovieReviews();
    this.getMovieVideos();
    this.getMovieImages();
    this.getMovieRecommendations();
  }

  getMovie() {
    this.moviesService.getMovieDetails(this.movieId).subscribe((data) => {
      console.log(data);
      if (data) {
        this.movieData = data;
      }
    });
  }

  getMovieCredits() {
    this.moviesService.getMovieCredits(this.movieId).subscribe((data) => {
      console.log(data, 'credits');
      if (data) {
        this.credits = data;
      }
    });
  }

  getMovieReviews() {
    this.moviesService.getMovieReviews(this.movieId).subscribe((data) => {
      console.log(data, 'reviews');
      if (data) {
        this.reviews = data;
      }
    });
  }

  getMovieVideos() {
    this.moviesService.getMovieVideos(this.movieId).subscribe((data) => {
      console.log(data, 'videos');
      if (data) {
        this.videos = data;
      }
    });
  }

  getMovieImages() {
    this.moviesService.getMovieImages(this.movieId).subscribe((data) => {
      console.log(data, 'images');
      if (data) {
        this.images = data;
      }
    });
  }

  getMovieRecommendations() {
    this.moviesService
      .getMovieRecommendations(this.movieId)
      .subscribe((data) => {
        console.log(data, 'recommendations');
        if (data) {
          this.recommendations = data;
        }
      });
  }
}
