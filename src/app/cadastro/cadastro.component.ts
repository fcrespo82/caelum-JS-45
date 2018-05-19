import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoComponent } from '../foto/foto.component';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { FotoService } from '../servicos/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})
export class CadastroComponent implements OnInit {
    foto = new FotoComponent()
    mensagem = new MensagemComponent()
    formCadastro: FormGroup

    patternURL = '^http.*|^data.*'
    requiredLength = 5
    constructor(private conexaoApi: FotoService,
        private rotaAtiva: ActivatedRoute,
        private roteador: Router,
        private formBuilder: FormBuilder) {

        this.formCadastro = formBuilder.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(this.requiredLength)])],
            url: ['', [Validators.required, Validators.pattern(this.patternURL)]], // Formato novo? https://angular.io/api/forms/FormBuilder#control
            descricao: ''
        })
    }

    ngOnInit() {
        this.rotaAtiva.params.subscribe(parametros => {
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
