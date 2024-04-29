import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-list',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.css'
})
export class CheckboxListComponent {
  checkBoxChange() {
    console.log('works');
  }

  deleteItem() {
    console.log('delete element')
  }

  addItem() {
    console.log('add new element')
  }

}
