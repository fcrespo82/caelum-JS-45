import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    template: `<img [src]="url" alt="{{titulo}}" class="img-fluid d-block mx-auto" >`
})
export class FotoComponent {
    //data binding
    @Input() titulo
    @Input() url
}
