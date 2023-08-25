import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesPreviewComponent } from './observables-preview.component';

describe('ObservablesPreviewComponent', () => {
  let component: ObservablesPreviewComponent;
  let fixture: ComponentFixture<ObservablesPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablesPreviewComponent]
    });
    fixture = TestBed.createComponent(ObservablesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
