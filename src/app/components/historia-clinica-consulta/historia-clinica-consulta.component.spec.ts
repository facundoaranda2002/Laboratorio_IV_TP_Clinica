import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaClinicaConsultaComponent } from './historia-clinica-consulta.component';

describe('HistoriaClinicaConsultaComponent', () => {
  let component: HistoriaClinicaConsultaComponent;
  let fixture: ComponentFixture<HistoriaClinicaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaClinicaConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriaClinicaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
