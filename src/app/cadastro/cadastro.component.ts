import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  foto = new FotoComponent()
  constructor(private client: HttpClient) { }

  ngOnInit() {
  }

  salvar() {

    let cabecalho = new HttpHeaders()

    cabecalho.append('Content-Type', 'application/json')

    let endpoint = 'http://localhost:3000/v1/fotos'
    this.client.post(endpoint, this.foto, {
      headers: cabecalho
    }).subscribe(
      (resposta) => {
        console.log(resposta);
      },
      (erro) => {
        console.log(erro);
      })
  }
}
