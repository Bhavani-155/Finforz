import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-upload-document',
  templateUrl: './qr-upload-document.component.html',
  styleUrls: ['./qr-upload-document.component.scss'],
})
export class QrUploadDocumentComponent {
  public stringQrCode: string = null;

  constructor() {
    this.stringQrCode = 'www.rtsg.com';
  }
}
