import { Component, Input } from "@angular/core";
//card-img-top
//img-fluid d-block mx-auto
@Component({
    selector: 'foto',
    styles: [`.card-img-top {
        width: 200px;
        height: 10rem;
        object-fit: cover;
    }`],
    template: `<img [src]="url" alt="{{titulo}}" class="card-img-top">`
})
export class FotoComponent {
    //data binding
    @Input() titulo = ''
    @Input() url = ''
    descricao = ''
}
