import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styles: []
})
export class ListagemComponent implements OnInit {

    title = 'Caelum Pic'
    listaFotos: FotoComponent[] = []

    // injeção de dependência
    constructor(private servico: FotoService) {
        //servico http
        //cliente 
        //url
        servico.listar().subscribe(
            fotos => { // Arrow function mantém o this do pai
                this.listaFotos = fotos
            }
        )
    }
    ngOnInit() {
    }

    remover(foto: FotoComponent) {
        console.log(foto)
        this.servico.deletar(foto).subscribe(
            resposta => { // Arrow function mantém o this do pai
                console.log(`Foto ${foto.titulo} apagado com sucesso!`)
                this.listaFotos = this.listaFotos.filter(
                    fotoDaLista => fotoDaLista !== foto
                )
            },
            erro => {
                console.log(`Erro ao apagar ${foto.titulo}.`)
            }
        )
    }
}
