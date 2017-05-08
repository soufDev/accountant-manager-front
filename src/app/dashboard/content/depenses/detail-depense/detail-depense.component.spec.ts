import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDepenseComponent } from './detail-depense.component';

describe('DetailDepenseComponent', () => {
  let component: DetailDepenseComponent;
  let fixture: ComponentFixture<DetailDepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
