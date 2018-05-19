import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styles: [`#mensagem {
    top: 10px;
    right: 10px;
    position: fixed !important;
    z-index: 9999;
}`]
})
export class MensagemComponent implements OnInit {
  @Input() tipo = 'primary'
  @Input() texto = ''

  constructor() { }

  ngOnInit() {
  }

}
