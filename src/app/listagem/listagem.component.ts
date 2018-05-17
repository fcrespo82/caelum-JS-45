import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic'
  listaFotos

  // injeção de dependência HttpClient
  constructor(client: HttpClient) {
    //servico http
    //cliente 
    //url
    client.get("http://localhost:3000/v1/fotos").subscribe(
      resposta => { // Arrow function mantém o this do pai
        // console.log(resposta)
        this.listaFotos = resposta
      }
    )
  }
  ngOnInit() {
  }

}
