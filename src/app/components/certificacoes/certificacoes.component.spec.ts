import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacoesComponent } from './certificacoes.component';

describe('CertificacoesComponent', () => {
  let component: CertificacoesComponent;
  let fixture: ComponentFixture<CertificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
