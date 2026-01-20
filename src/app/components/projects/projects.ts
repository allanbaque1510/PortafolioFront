import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import { MatIconModule } from '@angular/material/icon';
import { ResponseProjects } from '../../interfaces/response/response';
import { Modal } from '../modal/modal';
@Component({
  selector: 'app-projects',
  imports: [MatIconModule,Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements  OnInit,OnChanges {
  constructor(private portafolioService: PortafolioService) {}
  @Input() lang!: string; 
  data!: ResponseProjects;
  projectModal:any;
  showModal:boolean=false;

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
  openModal(project:any){
    console.log(project)
    this.projectModal=project;
    this.showModal=true;
  }

}
