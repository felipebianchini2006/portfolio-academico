import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SUBJECTS, Subject } from '../../data/subjects';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {
  readonly subjects = SUBJECTS;
  selected: Subject = this.subjects[0];

  selectSubject(subject: Subject): void {
    this.selected = subject;
  }

  trackById(_index: number, item: Subject): string {
    return item.id;
  }
}

