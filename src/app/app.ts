import { Component } from '@angular/core';
import { Index } from "./pages/index/index";

@Component({
  selector: 'app-root',
  imports: [Index],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portafolio';
}
