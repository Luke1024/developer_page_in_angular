import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCircularBarComponent } from './card-circular-bar.component';

describe('CardComponent', () => {
  let component: CardCircularBarComponent;
  let fixture: ComponentFixture<CardCircularBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCircularBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCircularBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
