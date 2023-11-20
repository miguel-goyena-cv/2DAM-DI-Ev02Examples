import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesFormReactiveComponent } from './activities-form-reactive.component';

describe('ActivitiesFormReactiveComponent', () => {
  let component: ActivitiesFormReactiveComponent;
  let fixture: ComponentFixture<ActivitiesFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesFormReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitiesFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
