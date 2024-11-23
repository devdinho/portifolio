import { Injectable } from '@angular/core';
import { environment } from '../environments/environments'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projeto } from '../models/Projeto'

@Injectable({
  providedIn: 'root'
})

export class PortifolioService {
  private urlBibliotecas:string
  private urlProjetos:string

  constructor(private http:HttpClient) { 
    this.urlBibliotecas = environment.apiBibliotecas
    this.urlProjetos = environment.apiProjetos
  }

  getBibliotecas():Observable<Projeto>{
    return this.http.get<Projeto>(`${this.urlBibliotecas}`)
  }
  getProjetos():Observable<Projeto>{
    return this.http.get<Projeto>(`${this.urlProjetos}`)
  }
}