import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import { MatIconModule } from '@angular/material/icon';
import { ResponseProjects } from '../../interfaces/response/response';
@Component({
  selector: 'app-projects',
  imports: [MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements  OnInit,OnChanges {
  constructor(private portafolioService: PortafolioService) {}
  @Input() lang!: string; 
  data!: ResponseProjects;

  ngOnInit() {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lang'] && !changes['lang'].firstChange) {
      this.getData();
    }
  }
  
  getData() {
    const params = this.lang ? { lang:this.lang } : undefined;
    this.portafolioService.getDataProjects(params).subscribe((data) => {
      this.portafolioService.sections = data.sections;
      this.data = data;
    });
  }

}
