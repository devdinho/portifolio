import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PortifolioService } from '../../services/portifolio.service';
import { Projeto } from '../../models/Projeto';
@Component({
  selector: 'app-bibliotecas',
  standalone: true,
  imports: [
    CardComponent,
  ],
  templateUrl: './bibliotecas.component.html',
  styleUrl: './bibliotecas.component.scss'
})
export class BibliotecasComponent implements OnInit{
  projetos:Projeto|any

  constructor(
    private service:PortifolioService
  ){}

  ngOnInit(): void {
    this.service.getBibliotecas().subscribe({
      next: (res) => {
        this.projetos = (res)
        console.log(this.projetos)
      },
      error: (err) => console.log(err)
    })
  }

}
