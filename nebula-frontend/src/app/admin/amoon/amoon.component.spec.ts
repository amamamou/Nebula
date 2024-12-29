import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoonComponent } from './amoon.component';

describe('AmoonComponent', () => {
  let component: AmoonComponent;
  let fixture: ComponentFixture<AmoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmoonComponent]
    });
    fixture = TestBed.createComponent(AmoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
