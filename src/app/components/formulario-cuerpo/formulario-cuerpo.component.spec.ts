import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCuerpoComponent } from './formulario-cuerpo.component';

describe('FormularioCuerpoComponent', () => {
  let component: FormularioCuerpoComponent;
  let fixture: ComponentFixture<FormularioCuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCuerpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
