import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const rotas: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'alterar/:fotoId', component: CadastroComponent },
    { path: '**', redirectTo: ''} // ** Sempre como ultima rota pois invalida as seguintes
]

export const ModuloRoteador = RouterModule.forRoot(rotas)