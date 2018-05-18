import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../servicos/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styles: []
})
export class CadastroComponent implements OnInit {
    foto = new FotoComponent()
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
                () => {
                    console.log('Alterado');
                    setTimeout(() => {
                        this.roteador.navigate(['/'])
                    }, 1000)
                },
                (erro) => {
                    console.log(erro);
                }
            )
        } else {
            this.conexaoApi.cadastrar(this.foto).subscribe(
                (resposta) => {
                    console.log(resposta);
                    this.foto = new FotoComponent()
                },
                (erro) => {
                    console.log(erro);
                }
            )
        }


    }
}
