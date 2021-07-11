import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatlessServiceComponent } from './statless-service.component';

describe('StatlessServiceComponent', () => {
  let component: StatlessServiceComponent;
  let fixture: ComponentFixture<StatlessServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatlessServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatlessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
