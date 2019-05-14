import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaInformacaoComponent } from './tabela-informacao.component';

describe('TabelaInformacaoComponent', () => {
  let component: TabelaInformacaoComponent;
  let fixture: ComponentFixture<TabelaInformacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaInformacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
