import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDonatorComponent } from './detail-donator.component';

describe('DetailDonatorComponent', () => {
  let component: DetailDonatorComponent;
  let fixture: ComponentFixture<DetailDonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
