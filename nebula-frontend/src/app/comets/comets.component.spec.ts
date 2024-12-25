import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CometsComponent } from './comets.component';

describe('CometsComponent', () => {
  let component: CometsComponent;
  let fixture: ComponentFixture<CometsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CometsComponent]
    });
    fixture = TestBed.createComponent(CometsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
