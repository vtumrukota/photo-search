import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindImageComponent } from './find-image.component';

describe('FindImageComponent', () => {
  let component: FindImageComponent;
  let fixture: ComponentFixture<FindImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
