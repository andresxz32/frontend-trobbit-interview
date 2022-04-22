import { ImageCat } from 'src/app/core/entities/imageCat.model';
import { Cat } from 'src/app/core/entities/Cat';
import { GatosService } from './../gatos.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ImagenesService } from '../../imagenes/imagenes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCatComponent implements OnInit {
  public catsFavorites: ImageCat[];
  constructor(
    private _gatoService: GatosService,
    private _imgService: ImagenesService,
    private _changeDetectorRef: ChangeDetectorRef,
    public _router: Router
  ) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  createCat(formValue: Cat): void {
    this._gatoService.createCat(formValue).subscribe((res) => {
      this._router.navigate(['/gatos']);
    });
  }

  updateCat(event): void {
    const { id, form } = event;
    this._gatoService.updateCat(id, form).subscribe((res) => {
      this._router.navigate(['/gatos']);
    });
  }

  getFavorites(): void {
    this._imgService.getFavorites().subscribe((res) => {
      this.catsFavorites = res;
      this._changeDetectorRef.detectChanges();
    });
  }
}
