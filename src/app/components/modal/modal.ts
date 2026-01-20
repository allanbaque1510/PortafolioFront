import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortafolioService } from '../../service/PortafolioService';
import { MatIconModule } from '@angular/material/icon';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-modal',
  imports: [ MatIconModule, Skills],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'] // CORRECCIÓN AQUÍ
})
export class Modal  {
  @Input() project!: any; 
  @Input() lang!: string; 
  @Input() showModal!:boolean;
  @Output() showModalChange = new EventEmitter<boolean>();

  constructor(private portafolioService: PortafolioService) {}

  closeModal(){
    this.showModalChange.emit(false);
  }
}
