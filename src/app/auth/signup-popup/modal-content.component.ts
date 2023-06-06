import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-content',
  templateUrl: 'modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  modalRef!: BsModalRef;
  @Output() onHide = new EventEmitter<void>();
  constructor(private router: Router,private modalService: BsModalService,private bsModalRef: BsModalRef){}
  
  navigate()
  {
    this.doHide();
    this.router.navigateByUrl('/signUp');
  }
  doHide() {
    this.bsModalRef.hide();
  }
}
