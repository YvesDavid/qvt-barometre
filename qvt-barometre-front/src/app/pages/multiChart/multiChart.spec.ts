import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChart } from './multiChartsupprim';

describe('MultiChart', () => {
  let component: MultiChart;
  let fixture: ComponentFixture<MultiChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
