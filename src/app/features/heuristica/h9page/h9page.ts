import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from "../components/header-heuristica/header-heuristica";
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h9page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],
  templateUrl: './h9page.html',
  styleUrl: './h9page.css',
})
export class H9page {

}
