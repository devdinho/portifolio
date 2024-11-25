import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { PortifolioService } from '../../services/portifolio.service';
import { Projeto } from '../../models/Projeto';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent,
  ],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent implements OnInit{
  projetos:Projeto|any

  constructor(
    private service:PortifolioService
  ){}

  ngOnInit(): void {
    this.service.getProjetos().subscribe({
      next: (res) => {
        this.projetos = (res)
      },
      error: (err) => console.log(err)
    })
  }

}