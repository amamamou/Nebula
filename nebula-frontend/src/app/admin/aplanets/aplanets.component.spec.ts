import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplanetsComponent } from './aplanets.component';

describe('AplanetsComponent', () => {
  let component: AplanetsComponent;
  let fixture: ComponentFixture<AplanetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplanetsComponent]
    });
    fixture = TestBed.createComponent(AplanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
