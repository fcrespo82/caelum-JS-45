import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
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
}
// Nome da classe tem que ser o nome do componente
// export para ser uma classe publica
