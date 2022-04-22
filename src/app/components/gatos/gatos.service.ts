import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from 'src/app/core/entities/Cat';
import { ImageCat } from 'src/app/core/entities/imageCat.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GatosService {
  private _api: string = environment.api;
  constructor(private _httpClient: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this._httpClient.get<Cat[]>(`${this._api}/gatos`);
  }

  getCat(id: string): Observable<Cat> {
    return this._httpClient.get<Cat>(`${this._api}/gatos/${id}`);
  }

  removeCat(id: string): Observable<any> {
    return this._httpClient.delete(`${this._api}/gatos/${id}`);
  }

  updateCat(id: string, cat: Cat): Observable<any> {
    return this._httpClient.patch<Cat[]>(`${this._api}/gatos/${id}`, cat);
  }

  createCat(cat: Cat): Observable<any> {
    return this._httpClient.post<Cat>(`${this._api}/gatos`, cat);
  }


}
