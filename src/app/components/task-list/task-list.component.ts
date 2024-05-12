import { Component, Input } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CheckboxListComponent } from '../checkbox-list/checkbox-list.component';


@Component({
  selector: 'app-task-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule, CheckboxListComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  selected!: Date | null;

  onDateSelected(date: Date) {
    if (this.selected !== null) {
      this.selected = date;
    }
  }
}
