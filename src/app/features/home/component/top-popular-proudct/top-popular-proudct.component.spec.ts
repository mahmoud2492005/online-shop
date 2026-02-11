import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPopularProudctComponent } from './top-popular-proudct.component';

describe('TopPopularProudctComponent', () => {
  let component: TopPopularProudctComponent;
  let fixture: ComponentFixture<TopPopularProudctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPopularProudctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPopularProudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
