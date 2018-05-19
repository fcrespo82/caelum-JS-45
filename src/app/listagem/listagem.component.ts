import { Component, OnInit } from '@angular/core';
import { FotoService } from '../servicos/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styles: []
})
export class ListagemComponent implements OnInit {

    title = 'Caelum Pic'
    listaFotos: FotoComponent[] = []
    mensagem = new MensagemComponent()

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
            mensagem => { // Arrow function mantém o this do pai
                this.listaFotos = this.listaFotos.filter(
                    fotoDaLista => fotoDaLista !== foto
                )
                this.mensagem = mensagem
                setTimeout(() => {
                    this.mensagem = new MensagemComponent()
                }, 1000);
            },
            erro => {
                console.log(`Erro ao apagar ${foto.titulo}.`)
            }
        )
    }
}
