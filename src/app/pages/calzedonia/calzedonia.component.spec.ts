import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzedoniaComponent } from './calzedonia.component';

describe('CalzedoniaComponent', () => {
  let component: CalzedoniaComponent;
  let fixture: ComponentFixture<CalzedoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalzedoniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalzedoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
