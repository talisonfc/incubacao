import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheboardComponent } from './dasheboard.component';

describe('DasheboardComponent', () => {
  let component: DasheboardComponent;
  let fixture: ComponentFixture<DasheboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasheboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasheboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
