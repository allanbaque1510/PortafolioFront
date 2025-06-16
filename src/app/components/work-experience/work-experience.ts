import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import { ResponseWorkExperience } from '../../interfaces/response/response';
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-work-experience',
  imports: [Skills],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css'
})
export class WorkExperience implements  OnInit,OnChanges{
  constructor(private portafolioService: PortafolioService) {}
  @Input() lang!: string; 
  data!: ResponseWorkExperience;
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
    this.portafolioService.getDataWorkExperience(params).subscribe((data) => {
      this.portafolioService.sections = data.sections;
      this.data = data;
    });
  }
}
