import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCvComponent } from './list-cv.component';

describe('ListCvComponent', () => {
  let component: ListCvComponent;
  let fixture: ComponentFixture<ListCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
