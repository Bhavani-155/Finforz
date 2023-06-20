import { SingpassModelComponent } from './../singpass-model/singpass-model.component';
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StepperService } from 'src/app/modules/auth/services/stepper.service';

@Component({
  selector: 'app-document-home',
  templateUrl: './document-home.component.html',
  styleUrls: ['./document-home.component.scss'],
})
export class DocumentHomeComponent {
  activeSingpass: boolean = false;
  activeManual: boolean = false;
  constructor(
    private modalService: BsModalService,
    public stepperService: StepperService
  ) {}

  openModal() {
    const modalRef: BsModalRef = this.modalService.show(SingpassModelComponent);

    modalRef.content.closeModalEvent.subscribe(() => {
      modalRef.hide();
    });
  }
  clickEvent(val: any) {
    if (val === 'singpass') {
      this.activeSingpass = !this.activeSingpass;
      this.activeManual = false;
    } else {
      this.activeManual = !this.activeManual;
      this.activeSingpass = false;
    }
  }

  next() {
    if (this.activeSingpass) {
      this.openModal();
    }
    if (this.activeManual) {
      this.stepperService.next(6);
    }
  }
}
