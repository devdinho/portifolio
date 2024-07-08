import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { SobreComponent } from "../sobre/sobre.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { CertificacoesComponent } from "../certificacoes/certificacoes.component";
import { StatusComponent } from "../status/status.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    SobreComponent,
    ProjetosComponent,
    CertificacoesComponent,
    StatusComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
