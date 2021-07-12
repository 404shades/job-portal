import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelessJobApplicationsComponent } from './stateless-job-applications.component';

describe('StatelessJobApplicationsComponent', () => {
  let component: StatelessJobApplicationsComponent;
  let fixture: ComponentFixture<StatelessJobApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatelessJobApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatelessJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
