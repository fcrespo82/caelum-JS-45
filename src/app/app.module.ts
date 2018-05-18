import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { TesteModule } from './teste/teste.module';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModuloRoteador } from './app.route';
import { FotoService } from './servicos/foto.service';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    TesteModule,
    HttpClientModule,
    PainelModule,
    ModuloRoteador,
    FormsModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
