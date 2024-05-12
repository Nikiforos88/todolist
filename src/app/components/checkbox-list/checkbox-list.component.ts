import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-checkbox-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.css'
})
export class CheckboxListComponent {
  isEmpty: boolean = false;
  taskList: { name: string, isChecked: boolean }[] = [];
  receivedValue: string = '';

  add() {
    this.taskList.push({ name: this.receivedValue, isChecked: false });
    this.receivedValue = '';
    this.isEmpty = true;
  }

  toggleCheckbox(index: number) {
    this.taskList[index].isChecked = !this.taskList[index].isChecked;
  }

  deleteEntry(index: number) {
    this.taskList.splice(index, 1);
    if (this.taskList.length === 0) {
        this.isEmpty = false; 
    }
  }
}
  


