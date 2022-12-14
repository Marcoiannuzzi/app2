import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/core/Servicios/auth.service';
import { SharedModule } from '../shared.module';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authServiceStub: Partial<AuthService>;
  let routerStub:Partial<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule, HttpClientModule, RouterTestingModule],
      declarations: [ NavbarComponent ],
      providers: [{
        provide:AuthService, useValue:authServiceStub
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
