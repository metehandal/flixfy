import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
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
  currentValue: string = '';

  constructor(
    private moviesService: MoviesService,
    private pickerCtrl: PickerController,
    private route: Router
  ) {}

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  onIonChange(event: CustomEvent) {
    this.currentValue = event.detail.value;
  }

  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
  }

  onPickerChange(event: CustomEvent) {
    console.log('picker change', event.detail.value);
  }

  ngOnInit() {
    this.getGenres();
  }
  onSlideChange() {
    const activeSlide = this.swiper?.nativeElement.swiper.activeIndex;
  }

  ngAfterViewInit() {
    this.categoriesMovies();
  }

  navigateTo(type: string) {
    this.route.navigate([type]);
  }

  async pickCategory() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'categories',
          options: this.genres.map((genre) => {
            return { text: genre.name, value: genre.name + '-' + genre.id };
          }),
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value) => {
            this.route.navigate(['/categories', value.categories.value]);
          },
        },
      ],
      cssClass: 'flixfy-picker',
      mode: 'md',
    });
    await picker.present();
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
