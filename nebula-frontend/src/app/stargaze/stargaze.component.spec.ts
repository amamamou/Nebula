import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StargazeComponent } from './stargaze.component';

describe('StargazeComponent', () => {
  let component: StargazeComponent;
  let fixture: ComponentFixture<StargazeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StargazeComponent]
    });
    fixture = TestBed.createComponent(StargazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
