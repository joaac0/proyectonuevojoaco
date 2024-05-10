import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';


import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
public info: Animal[];


constructor(){
this.info=[
  {
    id:"",
    nombre:"pato-tective",
    raza:"pato",
    edad:7,
    imagen:"https://i.pinimg.com/200x150/3f/2a/c5/3f2ac5cfca2d6dc4cb66a3cdaf974342.jpg",
    alt:"pato detective"
  },
  
]
}
}
