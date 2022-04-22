import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGatoComponent } from './formulario-gato.component';

describe('FormularioGatoComponent', () => {
  let component: FormularioGatoComponent;
  let fixture: ComponentFixture<FormularioGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
