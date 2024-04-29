import { Component, Input } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  checkBoxChange() {
    console.log('works');
  }

  deleteItem() {
    console.log('delete element')
  }

  addItem() {
    console.log('add new element')
  }

  selected!: Date | null;

  onDateSelected(date: Date) {
    if (this.selected !== null) {
      this.selected = date;
    }
  }
}
