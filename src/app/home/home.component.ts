import { Component, OnInit } from '@angular/core';
import { Frase } from '../interfaces/frase.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public frases: Frase[] = [

    {
      id: 1,
      texto: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial."

    },
    {
      id: 2,
      texto: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."

    },
    {
      id: 3,
      texto: "L'heroi va decidir travessar la porta que el portava a casa."

    },
    {
      id: 4,
      texto: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció..."

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
