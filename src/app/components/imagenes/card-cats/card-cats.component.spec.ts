import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCatsComponent } from './card-cats.component';

describe('CardCatsComponent', () => {
  let component: CardCatsComponent;
  let fixture: ComponentFixture<CardCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
