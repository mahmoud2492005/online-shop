import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLandigComponent } from './slider-landig.component';

describe('SliderLandigComponent', () => {
  let component: SliderLandigComponent;
  let fixture: ComponentFixture<SliderLandigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderLandigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderLandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
