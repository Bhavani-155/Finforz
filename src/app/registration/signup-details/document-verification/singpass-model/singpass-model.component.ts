import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Renderer2,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StepperService } from 'src/app/services/stepper.service';
@Component({
  selector: 'app-singpass-model',
  templateUrl: './singpass-model.component.html',
  styleUrls: ['./singpass-model.component.scss'],
})
export class SingpassModelComponent {
  @Output() closeModalEvent = new EventEmitter();
  constructor(public bsModalRef: BsModalRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
  closeModal() {
    this.closeModalEvent.emit();
  }
}
