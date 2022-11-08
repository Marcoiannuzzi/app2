import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CursoService } from '../core/Servicios/curso.service';

import { CursosComponent } from './cursos.component';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;
  let cursoServiceStub : Partial<CursoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosComponent ],
      imports : [RouterTestingModule, ReactiveFormsModule],
      providers :[{
        provide:CursoService, useValue:cursoServiceStub
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
