import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilisationComponent } from './add-utilisation.component';

describe('AddUtilisationComponent', () => {
  let component: AddUtilisationComponent;
  let fixture: ComponentFixture<AddUtilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
