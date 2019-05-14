import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorListaComponent } from './sensor-lista.component';

describe('SensorListaComponent', () => {
  let component: SensorListaComponent;
  let fixture: ComponentFixture<SensorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
