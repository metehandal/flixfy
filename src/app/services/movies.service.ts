import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = environment.baseUrl;
  private apiKey: string = environment.api_key_auth;

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  getPopularMovies(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getTopRatedMovies(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getUpcomingMovies(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMovieCredits(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMovieReviews(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMovieVideos(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMovieImages(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMovieRecommendations(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getGenres(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`)
      .pipe(catchError(this.handleError));
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    return this.http
      .get(
        `${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`
      )
      .pipe(catchError(this.handleError));
  }
}
