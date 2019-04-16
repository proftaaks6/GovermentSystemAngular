import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCartrackerComponent } from './insert-cartracker.component';

describe('InsertCartrackerComponent', () => {
  let component: InsertCartrackerComponent;
  let fixture: ComponentFixture<InsertCartrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCartrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCartrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
