import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSelling2Component } from './best-selling2.component';

describe('BestSelling2Component', () => {
  let component: BestSelling2Component;
  let fixture: ComponentFixture<BestSelling2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSelling2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSelling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
