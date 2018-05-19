import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../servicos/foto.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})
export class CadastroComponent implements OnInit {
    foto = new FotoComponent()
    mensagem = new MensagemComponent()


    constructor(private conexaoApi: FotoService, private rotaAtiva: ActivatedRoute, private roteador: Router) {
    }

    ngOnInit() {
        this.rotaAtiva.params.subscribe(parametros => {
            console.log(parametros.fotoId)
            if (parametros.fotoId) {
                this.conexaoApi.consultar(parametros.fotoId).subscribe(
                    fotoApi => this.foto = fotoApi
                )
            }
        })
    }

    salvar() {
        if (this.foto._id) {
            this.conexaoApi.alterar(this.foto).subscribe(
                mensagem => {
                    this.mensagem = mensagem
                    setTimeout(() => {
                        this.roteador.navigate(['/'])
                    }, 1000)
                },
                erro => {
                    this.mensagem.texto = `ERRO: ${erro}`
                    this.mensagem.tipo = 'danger'
                }
            )
        } else {
            this.conexaoApi.cadastrar(this.foto).subscribe(
                mensagem => {
                    this.mensagem = mensagem
                    this.foto = new FotoComponent()
                    setTimeout(() => {
                        this.mensagem.texto = ''
                    }, 1000)
                },
                erro => {
                    this.mensagem.texto = `ERRO: ${erro}`
                    this.mensagem.tipo = 'danger'
                }
            )
        }


    }
}
