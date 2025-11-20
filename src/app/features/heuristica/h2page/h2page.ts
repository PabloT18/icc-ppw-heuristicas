import { Component, signal } from '@angular/core';
import { HeaderHeuristicaComponent } from "../components/header-heuristica/header-heuristica";
import { HeuristicaBueno } from "./componentes/heuristica-malo/heuristica-bueno";
import { HeuristicaMalo } from "./componentes/heuristica-bueno/heuristica-malo";

@Component({
  selector: 'app-h2page',
  imports: [HeaderHeuristicaComponent, HeuristicaBueno, HeuristicaMalo],
  templateUrl: './h2page.html',
  styleUrl: './h2page.css',
})
export class H2page {



}
