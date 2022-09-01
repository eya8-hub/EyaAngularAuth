import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireDetailsComponent } from './inventaire-details.component';

describe('InventaireDetailsComponent', () => {
  let component: InventaireDetailsComponent;
  let fixture: ComponentFixture<InventaireDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaireDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
