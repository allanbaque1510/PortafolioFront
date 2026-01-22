import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import { ResponseHome } from '../../interfaces/response/response';
import { Skills } from "../skills/skills";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [Skills, MatIconModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // CORRECCIÓN AQUÍ
})
export class Home implements OnInit, OnChanges {
  @Input() lang!: string; 
  data!: ResponseHome;
  textPresentation = 'allan@linux:~$ whoami';
  textPresentationSecond = 'software engineer';
  private sectionIds = ['section1', 'section2', 'section3'];
  private currentIndex = 0;
  private isScrolling = false;

  constructor(private portafolioService: PortafolioService) {}

  ngOnInit() {
    this.getData();
    setTimeout(() => {
      this.scrollToSection(this.currentIndex, false);
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lang'] && !changes['lang'].firstChange) {
      this.getData();
    }
  }

  getData() {
    const params = this.lang ? { lang: this.lang } : undefined;
    this.portafolioService.getData(params).subscribe((data) => {
      this.portafolioService.sections = data.sections;
      this.portafolioService.socialMedia = data.socialMedia;
      this.data = data;
    });
  }

  private scrollToSection(index: number, smooth: boolean = true) {
    if (index < 0 || index >= this.sectionIds.length) return;
    this.currentIndex = index;

    const el = document.getElementById(this.sectionIds[index]);
    if (!el) return;

    this.isScrolling = true;
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });

    setTimeout(() => {
      this.isScrolling = false;
    }, smooth ? 700 : 0);
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (this.isScrolling) {
      event.preventDefault();
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    const newIndex = this.currentIndex + direction;

    if (newIndex >= 0 && newIndex < this.sectionIds.length) {
      this.scrollToSection(newIndex);
      event.preventDefault();
    }
  }

  // Opcional: control con teclado para accesibilidad
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isScrolling) return;

    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
      if (this.currentIndex < this.sectionIds.length - 1) {
        this.scrollToSection(this.currentIndex + 1);
        event.preventDefault();
      }
    } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      if (this.currentIndex > 0) {
        this.scrollToSection(this.currentIndex - 1);
        event.preventDefault();
      }
    }
  }
}
