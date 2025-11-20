import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h6page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],

  templateUrl: './h6page.html',
  styleUrl: './h6page.css',
})
export class H6page {

}
