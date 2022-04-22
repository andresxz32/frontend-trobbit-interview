import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageCat } from 'src/app/core/entities/imageCat.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  private _api: string = environment.api;
  private _img: BehaviorSubject<string | null> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) {}

  get img$(): Observable<string> {
    return this._img.asObservable();
  }

  set img(img: string) {
    this._img.next(img);
  }

  getCats(): Observable<ImageCat[]> {
    return this._httpClient.get<ImageCat[]>(`${this._api}/imagenes`);
  }

  markFavorites(id: string): Observable<any> {
    return this._httpClient.post(`${this._api}/imagenes/favoritos`, { id });
  }

  getFavorites(): Observable<ImageCat[]> {
    return this._httpClient.get<ImageCat[]>(`${this._api}/imagenes/favoritos`);
  }
}
