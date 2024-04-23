import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.page.html',
  styleUrls: ['./tv-shows.page.scss'],
})
export class TvShowsPage implements OnInit {
  popular: any[] = [];
  topRated: any[] = [];
  onTheAir: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPopularTvShows();
    this.getTopRatedTvShows();
    this.getOnTheAirTvShows();
  }

  getPopularTvShows() {
    this.moviesService.getPopularTvShows().subscribe((data) => {
      console.log(data, 'POPULAR TV SHOWS');
      this.popular = data.results;
    });
  }

  getTopRatedTvShows() {
    this.moviesService.getTopRatedTvShows().subscribe((data) => {
      console.log(data, 'TOP RATED TV SHOWS');
      this.topRated = data.results;
    });
  }

  getOnTheAirTvShows() {
    this.moviesService.getOnTheAirTvShows().subscribe((data) => {
      console.log(data, 'ON THE AIR TV SHOWS');
      this.onTheAir = data.results;
    });
  }
}
