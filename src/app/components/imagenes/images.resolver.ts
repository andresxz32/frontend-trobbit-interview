import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ImageCat } from 'src/app/core/entities/imageCat.model';
import { ImagenesService } from './imagenes.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesResolver implements Resolve<any> {
  constructor(
    private _imagesService: ImagenesService,
    private _router: Router
  ) {}
  resolve(): Observable<ImageCat[]> {
    return this._imagesService.getCats().pipe(
      catchError((error) => {
        console.error(error);
        this._router.navigateByUrl('/home');
        return throwError(error);
      })
    );
  }
}
