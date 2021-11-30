import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCenteredDesignComponent } from './human-centered-design.component';

describe('HumanCenteredDesignComponent', () => {
  let component: HumanCenteredDesignComponent;
  let fixture: ComponentFixture<HumanCenteredDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanCenteredDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanCenteredDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
