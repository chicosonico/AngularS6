import { Component, Input, OnInit } from '@angular/core';
import { Frase } from '../interfaces/frase.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() public frases!:Frase[];

  public currentSentence = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public prev(){
    if(this.currentSentence <= 1){
      return
    }else{
      this.currentSentence -= 1;  
    }

  };

  public next(){
    if(this.currentSentence >= 4){
      return
    }else{
      this.currentSentence += 1;

    }

  };

}
