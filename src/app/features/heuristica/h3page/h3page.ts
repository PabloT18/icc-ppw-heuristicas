import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h3page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],

  templateUrl: './h3page.html',
  styleUrl: './h3page.css',
})
export class H3page {

}
