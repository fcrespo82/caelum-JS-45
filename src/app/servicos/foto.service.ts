import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FotoComponent } from "../foto/foto.component";
import { map, catchError } from "rxjs/operators";
import { MensagemComponent } from "../mensagem/mensagem.component";
import { of } from 'rxjs/observable/of';

@Injectable()
export class FotoService {
    url = "//localhost:3000/v1/fotos/"

    opcoes = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    constructor(private conexaoApi: HttpClient) {
    }

    listar(): Observable<FotoComponent[]> {
        return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    cadastrar(foto: FotoComponent): Observable<MensagemComponent> {
        return this.conexaoApi.post(this.url, foto, this.opcoes).pipe(
            map(resposta => {
                let mensagem = new MensagemComponent()
                mensagem.texto = `Foto ${foto.titulo} cadastrada com sucesso.`
                mensagem.tipo = 'success'
                return mensagem
            }
            )
        )
    }

    deletar(foto: FotoComponent): Observable<MensagemComponent> {
        return this.conexaoApi.delete(this.url + foto._id).pipe(
            map(resposta => {
                let mensagem = new MensagemComponent()
                mensagem.texto = `Foto ${foto.titulo} apagada com sucesso.`
                mensagem.tipo = 'success'
                return mensagem
            })
        )
    }

    consultar(fotoId: string): Observable<FotoComponent> {
        return this.conexaoApi.get<FotoComponent>(this.url + fotoId)
    }

    alterar(foto: FotoComponent): Observable<MensagemComponent> {
        return this.conexaoApi.put(this.url + foto._id, foto, this.opcoes).pipe(
            map(resposta => {
                let mensagem = new MensagemComponent()
                mensagem.texto = `Foto ${foto.titulo} alterada com sucesso.`
                mensagem.tipo = 'success'
                return mensagem
            })
        )
    }

}