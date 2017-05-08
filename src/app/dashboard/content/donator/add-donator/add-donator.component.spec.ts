import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonatorComponent } from './add-donator.component';

describe('AddDonatorComponent', () => {
  let component: AddDonatorComponent;
  let fixture: ComponentFixture<AddDonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
