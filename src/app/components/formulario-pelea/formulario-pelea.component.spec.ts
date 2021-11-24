import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPeleaComponent } from './formulario-pelea.component';

describe('FormularioPeleaComponent', () => {
  let component: FormularioPeleaComponent;
  let fixture: ComponentFixture<FormularioPeleaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPeleaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPeleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
