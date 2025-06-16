import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioService } from '../../service/PortafolioService';
import { Home } from "../../components/home/home";
import { fadeAnimation } from '../../animation/fadeAnimation';
import { Projects } from "../../components/projects/projects";
import { WorkExperience } from "../../components/work-experience/work-experience";
import { Services } from "../../components/services/services";
import { Sections } from "../../components/sections/sections";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, Home, Projects, WorkExperience, Services, Sections],
  templateUrl: './index.html',
  styleUrl: './index.css',
  animations: [fadeAnimation]
})
export class Index implements OnInit {
  constructor(public portafolioService: PortafolioService) {}
  lang: string = 'es';
  
  ngOnInit() {
  }
  changeLanguage(lang: string) {
    this.lang = lang;
  }
 
}
