import { GatosService } from './gatos.service';
import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Cat } from 'src/app/core/entities/Cat';

@Injectable({
  providedIn: 'root',
})
export class GatosResolver implements Resolve<any> {
  constructor(private _gatosService: GatosService, private _router: Router) {}
  resolve(): Observable<Cat[]> {
    return this._gatosService.getCats().pipe(
      catchError((error) => {
        console.error(error);
        this._router.navigateByUrl('/home');
        return throwError(error);
      })
    );
  }
}
