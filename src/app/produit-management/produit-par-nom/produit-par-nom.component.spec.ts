import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitParNomComponent } from './produit-par-nom.component';

describe('ProduitParNomComponent', () => {
  let component: ProduitParNomComponent;
  let fixture: ComponentFixture<ProduitParNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitParNomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitParNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
