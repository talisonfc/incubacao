import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirInformacaoComponent } from './inserir-informacao.component';

describe('InserirInformacaoComponent', () => {
  let component: InserirInformacaoComponent;
  let fixture: ComponentFixture<InserirInformacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirInformacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
