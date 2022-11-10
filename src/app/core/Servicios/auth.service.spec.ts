import{ TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs';

fdescribe('authService', ()=>{
    let httpClientSpy:{ get: jasmine.Spy};
    let service : AuthService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule
            ]
        });
        httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
        service = new AuthService(httpClientSpy as any);
    });

    it('should be created', ()=>{
        expect(service).toBeTruthy();
    })

    it('should get all users', ()=>{
        const mockUsuarios = [
            {
              "id": 1,
              "email": "test1@test.com",
              "password": "test1",
              "rol": "admin"
            },
            {
              "id": 2,
              "email": "test2@test.com",
              "password": "test2",
              "rol": "alumno"
            }
          ];

          httpClientSpy.get.and.returnValue(of(mockUsuarios));

          service.obtenerUsusarios().subscribe((usuarios)=>{
            expect(usuarios).toEqual(mockUsuarios);
          }
          )


        
    })

})