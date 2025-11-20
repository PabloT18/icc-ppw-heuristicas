import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from "../components/header-heuristica/header-heuristica";
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h8page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],
  templateUrl: './h8page.html',
  styleUrl: './h8page.css',
})
export class H8page {

}
