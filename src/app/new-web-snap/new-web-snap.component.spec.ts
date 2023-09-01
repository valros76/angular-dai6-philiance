import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWebSnapComponent } from './new-web-snap.component';

describe('NewWebSnapComponent', () => {
  let component: NewWebSnapComponent;
  let fixture: ComponentFixture<NewWebSnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewWebSnapComponent]
    });
    fixture = TestBed.createComponent(NewWebSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
