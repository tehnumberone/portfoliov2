import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterculturalCommunicationComponent } from './intercultural-communication.component';

describe('InterculturalCommunicationComponent', () => {
  let component: InterculturalCommunicationComponent;
  let fixture: ComponentFixture<InterculturalCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterculturalCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterculturalCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
