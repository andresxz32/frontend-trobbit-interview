import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCatComponent } from './create-cat.component';

describe('CreateCatComponent', () => {
  let component: CreateCatComponent;
  let fixture: ComponentFixture<CreateCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
