import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEspecialistasComponent } from './formulario-especialistas.component';

describe('FormularioEspecialistasComponent', () => {
  let component: FormularioEspecialistasComponent;
  let fixture: ComponentFixture<FormularioEspecialistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEspecialistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
