import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizerComponent } from './normalizer.component';

describe('NormalizerComponent', () => {
  let component: NormalizerComponent;
  let fixture: ComponentFixture<NormalizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
