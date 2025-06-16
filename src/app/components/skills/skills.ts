import { Component, Input } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-skills',
  imports: [MatTooltipModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  @Input() skills!: Skill[]
}
