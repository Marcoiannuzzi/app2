import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AlumnoService } from 'src/app/core/Servicios/alumno.service';

import { FormularioComponent } from './formulario.component';

fdescribe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let alumnoServiceStub: Partial<AlumnoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
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
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an invalid form if it is not complete', () => {
    const form = component.formAlumno; 
    const dni = form.controls['dni'];

    dni.setValue('1234');

    expect(form.invalid).toBeTrue();
  });

  it('should be an valid form if it is complete', () => {
    const form = component.formAlumno; 
    const dni = form.controls['dni'];
    const nombre = form.controls['nombre'];
    const apellido = form.controls['apellido'];
    const email = form.controls['email'];
    const curso = form.controls['curso'];

    dni.setValue('1234');
    nombre.setValue('Marco');
    apellido.setValue('Iannuzi');
    email.setValue('marco@gmail.com');
    curso.setValue('Angular');

    expect(form.valid).toBeTrue();
  });
});
