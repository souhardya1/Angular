import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReactiveFormComponent } from './sample-reactive-form.component';

describe('SampleReactiveFormComponent', () => {
  let component: SampleReactiveFormComponent;
  let fixture: ComponentFixture<SampleReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
