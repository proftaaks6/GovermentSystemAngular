import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NawinformationComponent } from './nawinformation.component';

describe('NawinformationComponent', () => {
  let component: NawinformationComponent;
  let fixture: ComponentFixture<NawinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NawinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NawinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
