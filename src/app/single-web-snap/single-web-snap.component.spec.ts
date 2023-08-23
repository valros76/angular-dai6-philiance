import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWebSnapComponent } from './single-web-snap.component';

describe('SingleWebSnapComponent', () => {
  let component: SingleWebSnapComponent;
  let fixture: ComponentFixture<SingleWebSnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleWebSnapComponent]
    });
    fixture = TestBed.createComponent(SingleWebSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
