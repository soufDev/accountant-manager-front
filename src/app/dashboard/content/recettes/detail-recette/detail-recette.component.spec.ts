import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecetteComponent } from './detail-recette.component';

describe('DetailRecetteComponent', () => {
  let component: DetailRecetteComponent;
  let fixture: ComponentFixture<DetailRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
