import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatlessJobComponent } from './statless-job.component';

describe('StatlessJobComponent', () => {
  let component: StatlessJobComponent;
  let fixture: ComponentFixture<StatlessJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatlessJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatlessJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
