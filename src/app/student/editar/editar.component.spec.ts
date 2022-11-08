import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';

import { EditarComponent } from './editar.component';

describe('EditarComponent', () => {
  let component: EditarComponent;
  let fixture: ComponentFixture<EditarComponent>;
  let alumnoServiceStub: Partial<AlumnoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers:[
        {provide: AlumnoService, useValue: alumnoServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
