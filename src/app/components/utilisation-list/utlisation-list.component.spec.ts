import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlisationListComponent } from './utlisation-list.component';

describe('UtlisationListComponent', () => {
  let component: UtlisationListComponent;
  let fixture: ComponentFixture<UtlisationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtlisationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtlisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
