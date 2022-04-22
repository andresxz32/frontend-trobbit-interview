import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { ImagenesService } from '../../imagenes/imagenes.service';
import { GatosService } from '../gatos.service';

@Component({
  selector: 'formulario-gato',
  templateUrl: './formulario-gato.component.html',
  styleUrls: ['./formulario-gato.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioGatoComponent implements OnInit {
  public catFormGroup: FormGroup;
  public id: string;
  private _unsubscribeAll: Subject<boolean> = new Subject<boolean>();
  @Output() readonly createCat: EventEmitter<any> = new EventEmitter<any>();
  @Output() readonly updateCat: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _gatoService: GatosService,
    private _imgService: ImagenesService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.catFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      foto: [null, Validators.required],
    });
    this.getParams();
    this.getImg();
  }

  create(): void {
    this.createCat.emit(this.catFormGroup.value);
  }

  update(): void {
    this.updateCat.emit({ id: this.id, form: this.catFormGroup.value });
  }

  getParams(): void {
    this._activeRoute.queryParams
      .pipe(map((params) => params['query']))
      .subscribe((id) => {
        if (id) this.getCat(id);
      });
  }

  getCat(id: string) {
    this.id = id;
    this._gatoService.getCat(id).subscribe((cat) => {
      this.catFormGroup.patchValue(cat);
      this._changeDetectorRef.markForCheck();
    });
  }

  getImg(): void {
    this._imgService.img$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((img) => {
        this.catFormGroup.get('foto').setValue(img);
        this._changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
