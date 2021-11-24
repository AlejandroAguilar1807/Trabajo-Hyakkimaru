import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonioComponent } from './demonio.component';

describe('DemonioComponent', () => {
  let component: DemonioComponent;
  let fixture: ComponentFixture<DemonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
