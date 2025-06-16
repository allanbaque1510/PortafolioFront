import { Component } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sections',
  imports: [MatTooltipModule,MatIconModule],
  templateUrl: './sections.html',
  styleUrl: './sections.css'
})
export class Sections {
  constructor(public _portafolioService: PortafolioService) {}
  
  goToSection(slug: string) {
    console.log(slug)
    this._portafolioService.currentSection = slug;
  }
}
