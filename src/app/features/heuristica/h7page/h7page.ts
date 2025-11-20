import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h7page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],

  templateUrl: './h7page.html',
  styleUrl: './h7page.css',
})
export class H7page {

}
