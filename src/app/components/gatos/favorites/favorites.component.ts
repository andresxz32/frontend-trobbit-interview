import { ImageCat } from 'src/app/core/entities/imageCat.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ImagenesService } from '../../imagenes/imagenes.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  @Input() catsFavorites: ImageCat[];

  constructor(private _imgService: ImagenesService) {}

  ngOnInit(): void {}

  setPhoto(image) {
    this._imgService.img = image;
  }
}
