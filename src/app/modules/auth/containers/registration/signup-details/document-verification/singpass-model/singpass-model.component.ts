import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-singpass-model',
  templateUrl: './singpass-model.component.html',
  styleUrls: ['./singpass-model.component.scss'],
})
export class SingpassModelComponent {
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
