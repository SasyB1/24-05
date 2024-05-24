import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamamayComponent } from './yamamay.component';

describe('YamamayComponent', () => {
  let component: YamamayComponent;
  let fixture: ComponentFixture<YamamayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YamamayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YamamayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
