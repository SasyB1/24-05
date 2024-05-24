import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TezenisComponent } from './tezenis.component';

describe('TezenisComponent', () => {
  let component: TezenisComponent;
  let fixture: ComponentFixture<TezenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TezenisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TezenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
