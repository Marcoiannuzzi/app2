import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CursoService } from 'src/app/core/Servicios/curso.service';

import { CursoFormComponent } from './curso-form.component';

describe('CursoFormComponent', () => {
  let component: CursoFormComponent;
  let fixture: ComponentFixture<CursoFormComponent>;
  let cursoServiceStub:Partial<CursoService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoFormComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers:[
        {provide: CursoService, useValue: cursoServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
