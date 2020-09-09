import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface NamedGeometry {
  name: string;
  geometry: any;
}

export interface GhanaGeometry {
  country: NamedGeometry;
  regions: Array<NamedGeometry>;
}

@Injectable({
  providedIn: 'root',
})
export class DjangoApiService {
  // An Observable for the geometry of Ghana. Observables are a tool for async
  // programming in Angular. See the docs here if you need more info:
  //   https://angular.io/guide/observables
  ghanaGeometry$: Observable<GhanaGeometry> = this.http
    // Issue a GET request to the Django server
    .get(environment.djangoUrl + '/ghana-geometry')
    .pipe(
      // Use `response` as if it had type `GhanaGeometry`
      map((response) => response as GhanaGeometry),

      // `shareReplay(1)` is a way of caching the response
      shareReplay(1)
    );

  // The HttpClient is automatically supplied through dependency injection
  constructor(private http: HttpClient) {}

  /*********************************************************************
   *                                                                   *
   *   **************************!!!!!!!****************************   *
   *   **                                                         **   *
   *   **  HINT: This is a good place for you to define more      **   *
   *   **    requests to the Django server.                       **   *
   *   **                                                         **   *
   *   *************************************************************   *
   *                                                                   *
   *********************************************************************/

  /**
   * Implement this method, which should return a list of locations of flood
   * events from the backend.
   */
  getMarkers() {
    // // You'll likely need to use this function to query the Django backend.
    // this.http.get();
  }

  /**
   * Implement this method, which should submit a new flood event location to
   * the backend
   */
  addMarker() {}
}
