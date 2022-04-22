import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageCat } from 'src/app/core/entities/imageCat.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  private _api: string = environment.api;

  constructor(private _httpClient: HttpClient) {}

  getCats(): Observable<ImageCat[]> {
    return this._httpClient.get<ImageCat[]>(`${this._api}/imagenes`);
  }

  markFavorites(id: string): Observable<any> {
    return this._httpClient.post(`${this._api}/imagenes/favoritos`, { id });
  }
}
