import { Component, Input, OnInit } from '@angular/core';
import { Frase } from '../interfaces/frase.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() public frases!:Frase[];

  constructor() { }

  ngOnInit(): void {
  }

}
