import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDemonioComponent } from './formulario-demonio.component';

describe('FormularioDemonioComponent', () => {
  let component: FormularioDemonioComponent;
  let fixture: ComponentFixture<FormularioDemonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDemonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDemonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
