import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { SobreComponent } from "../sobre/sobre.component";
import { ProjetosComponent } from "../projetos/projetos.component";
import { CertificacoesComponent } from "../certificacoes/certificacoes.component";
import { StatusComponent } from "../status/status.component";
import {BibliotecasComponent} from "../bibliotecas/bibliotecas.component"
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    SobreComponent,
    ProjetosComponent,
    BibliotecasComponent,
    CertificacoesComponent,
    StatusComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
