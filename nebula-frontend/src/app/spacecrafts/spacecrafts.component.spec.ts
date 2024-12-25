import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacecraftsComponent } from './spacecrafts.component';

describe('SpacecraftsComponent', () => {
  let component: SpacecraftsComponent;
  let fixture: ComponentFixture<SpacecraftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftsComponent]
    });
    fixture = TestBed.createComponent(SpacecraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});