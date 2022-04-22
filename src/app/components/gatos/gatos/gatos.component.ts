import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/core/entities/Cat';
import { GatosService } from '../gatos.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GatosComponent implements OnInit {
  public cats: Cat[] = [];
  constructor(
    private _activeRoute: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef,
    private _gatoService: GatosService
  ) {}

  ngOnInit(): void {
    const { template } = this._activeRoute.snapshot.data;
    this.cats = template;
    this._changeDetectorRef.markForCheck();
  }

  create(): void {}

  delete(id: string): void {
    this._gatoService.removeCat(id).subscribe(
      (_) => {
        this.getCats();
      },
      (e) => console.error(e)
    );
  }

  getCats() {
    this._gatoService.getCats().subscribe(
      (res) => {
        this.cats = res;
        this._changeDetectorRef.markForCheck();
      },
      (e) => e
    );
  }
}
