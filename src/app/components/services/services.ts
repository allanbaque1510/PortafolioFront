import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import { ResponseService } from '../../interfaces/response/response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements  OnInit,OnChanges{
  constructor(private portafolioService: PortafolioService) {}
  @Input() lang!: string; 
  data!: ResponseService;
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
    this.portafolioService.getDataServices(params).subscribe((data) => {
      this.portafolioService.sections = data.sections;
      this.data = data;
    });
  }
}

