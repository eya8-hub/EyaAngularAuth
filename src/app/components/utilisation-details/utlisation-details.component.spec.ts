import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlisationDetailsComponent } from './utlisation-details.component';

describe('UtlisationDetailsComponent', () => {
  let component: UtlisationDetailsComponent;
  let fixture: ComponentFixture<UtlisationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtlisationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtlisationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
