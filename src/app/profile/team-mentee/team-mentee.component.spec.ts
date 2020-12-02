import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMenteeComponent } from './team-mentee.component';

describe('TeamMenteeComponent', () => {
  let component: TeamMenteeComponent;
  let fixture: ComponentFixture<TeamMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMenteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
