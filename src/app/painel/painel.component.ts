import { Component, Input } from "@angular/core";


@Component({
    selector: "painel",
    templateUrl: "painel.component.html",
    styles: []
})
export class PainelComponent {
    @Input() titulo: string
    @Input() descricao: string
}