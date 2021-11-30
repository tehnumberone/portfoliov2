import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalCompetencesComponent } from './professional-competences.component';

describe('ProfessionalCompetencesComponent', () => {
  let component: ProfessionalCompetencesComponent;
  let fixture: ComponentFixture<ProfessionalCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
