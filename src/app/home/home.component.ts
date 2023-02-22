import { Component, OnInit } from '@angular/core';
import { Frase } from '../interfaces/frase.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  start: boolean = true;
  backgroundImg: string = '/assets/images/1.jpg';


  public frases: Frase[] = [

    {
      id: 1,
      txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.",
      img: "/assets/images/1.jpg"

    },
    {
      id: 2,
      txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      img:"/assets/images/2.jpg"

    },
    {
      id: 3,
      txt: "L'heroi va decidir travessar la porta que el portava a casa.",
      img: "/assets/images/3.jpg"

    },
    {
      id: 4,
      txt: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció...",
      img: "/assets/images/4.jpg"

    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  startBtn(){
    this.start = false;
  }

  backgroundHome(img:string){
    
    // setTimeout(() => {
    // }, 0);
    this.backgroundImg = img;
    // el siguiente log se imprimirá demasiadas veces en consola
    console.log(img);
    return img;
  };

}
