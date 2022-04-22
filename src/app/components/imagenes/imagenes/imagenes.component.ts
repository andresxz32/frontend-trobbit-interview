import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCat } from 'src/app/core/entities/imageCat.model';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagenesComponent implements OnInit {
  public cats: ImageCat[] = [];
  constructor(
    private _activeRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private _imagesService: ImagenesService
  ) {}

  ngOnInit(): void {
    const { template } = this._activeRoute.snapshot.data;
    this.cats = template;
    this._changeDetectorRef.markForCheck();
  }

  like(event) {
    this._imagesService.markFavorites(event).subscribe(
      (_) => {
        console.log('Marcado como favorito');
      },
      (e) => {
        console.error('Error');
      }
    );
  }
}
