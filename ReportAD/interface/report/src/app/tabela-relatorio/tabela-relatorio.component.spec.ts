import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaRelatorioComponent } from './tabela-relatorio.component';

describe('TabelaRelatorioComponent', () => {
  let component: TabelaRelatorioComponent;
  let fixture: ComponentFixture<TabelaRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
